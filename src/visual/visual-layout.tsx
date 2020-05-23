import React from 'react';
import { connect } from 'dva';
import { DropTarget, ConnectDropTarget } from 'react-dnd';
import styles from './style.less';

/**
 * @file 可视化布局容器
 *       模板 + 预览
 * @TODO 接口定义
 */

type IProps = {
  getDndFactory: Function;
  connectDropTarget?: ConnectDropTarget;
  items: Array<any>;
  dispatch: Function;
};

function mapStateToProps(state) {
  return { items: state.visual.items };
}

class VerticalLayout extends React.Component<IProps, any> {
  leaveId: any;

  /**
   * 删除控件
   */
  remove = (id: number) => {
    const { items, dispatch } = this.props;

    for (let i = 0; i < items.length; i++) {
      if (items[i].id == id) {
        items.splice(i, 1);
        break;
      }
    }

    dispatch({ type: 'visual/finish', payload: { items: [...items] } });
  };

  /**
   * 确认操作
   */
  finish = () => {
    const { items, dispatch } = this.props;

    for (const data of items) {
      if (data['virtual']) {
        delete data['virtual'];
        break;
      }
    }

    dispatch({ type: 'visual/finish', payload: { items: [...items] } });
  };

  /**
   * 虚拟占位
   */
  add = (item: any, targetId: number) => {
    const { items, dispatch } = this.props;
    item.virtual = true;

    const fromIndex = arrayFind(items, item.id);
    const toIndex = arrayFind(items, targetId);

    fromIndex > -1 && items.splice(fromIndex, 1);
    toIndex > -1 && items.splice(toIndex, 0, item);

    dispatch({ type: 'visual/add', payload: { items: [...items] } });
  };

  /**
   * 撤销新加入的虚拟元素
   */
  undo = () => {
    this.leaveId = setTimeout(() => {
      const { items, dispatch } = this.props;

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.virtual) {
          // drag is not release 会导致 uid 不连续
          delete item.id;
          items.splice(i, 1);
          break;
        }
      }

      dispatch({ type: 'visual/undo', payload: { items: [...items] } });
    }, 200);
  };

  render() {
    const { connectDropTarget, getDndFactory, items } = this.props;
    setUid(items);

    return connectDropTarget!(
      <div className={styles.visualLayout} onDragLeave={this.undo}>
        {items.map((data) => {
          const DndItem = getDndFactory(data.factory);
          return <DndItem key={data.id} {...data} add={this.add} remove={this.remove} finish={this.finish} />;
        })}
      </div>
    );
  }
}

/**
 * 查找数组元素
 */
export const arrayFind = (array: any, id: number | string) => {
  if (id == 'end') {
    return array.length;
  }

  for (let index = 0; index < array.length; index++) {
    if (array[index].id == id) {
      return index;
    }
  }

  return -1;
};

export const setUid = (array: Array<any>) => {
  let uid = 1;

  array.forEach((data) => (data.id = uid++));
  setUid['uid'] = uid;
};

export const getUid = () => setUid['uid']++;

let WrapLayout = DropTarget(
  'enro',
  {
    drop(props, monitor, container) {
      if (!container) {
        return;
      }

      const item = monitor.getItem();
      container.finish(item);
    },
    // 只处理从外部拖入的控件
    hover(props, monitor, container) {
      if (!container) {
        return;
      }
      // 还在容器内部 dont undo
      clearTimeout(container.leaveId);

      const item = monitor.getItem();
      // 一定要有 id !
      if (!item.id) {
        item.id = getUid();
        container.add(item, 'end');
      }
    },
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  })
)(VerticalLayout);

WrapLayout = connect(mapStateToProps)(WrapLayout) as React.ComponentClass<IProps, any>;

export let DndVerticalLayout = WrapLayout;
