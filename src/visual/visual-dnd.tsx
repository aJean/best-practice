import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import styles from './style.less';

/**
 * @file dnd init
 */

const Factory = {};

export const dndInstall = (Controls: Array<any>) => {
  return Controls.map(Control => {
    const factoryName = Control.name;
    // 保存可用的 factory
    Factory[factoryName] = [dndEnable(), Control];
    return { factory: factoryName, name: Control.controlName };
  });
};

export const getDndFactory = (key: string) => {
  return Factory[key][0];
};

export const getRenderFactory = (key: string) => {
  return Factory[key][1];
};

/**
 * dnd 展示组件，用于 layout 模板中
 */
export const dndEnable = () => {
  class Wrapper extends React.PureComponent<any, any> {
    getStyle(): React.CSSProperties {
      return { position: 'relative' };
    }

    /**
     * 删除组件
     */
    onDust = () => {
      const { id, remove } = this.props;
      remove(id);
    };

    render() {
      const props = this.props;
      const { connectDropTarget, connectDragSource, virtual } = props;
      const className = virtual ? styles.visualVirtualItem : styles.visualDndItem;

      return connectDropTarget(
        connectDragSource(
          <div className={className} style={this.getStyle()}>
            <div className={styles.visualDndItemName}>{props.name}</div>
            <span className={styles.iconEditor} />
            <span className={styles.iconAshbin} onClick={this.onDust} />
          </div>,
        ),
      );
    }
  }

  let dndWrap = DragSource(
    'enro',
    {
      beginDrag(props: any) {
        return { ...props };
      },
      endDrag(props: any) {
        props.finish();
      },
    },
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging(),
    }),
  )(Wrapper);

  dndWrap = DropTarget(
    'enro',
    {
      canDrop() {
        return false;
      },
      // 判断 item 虚拟位置
      hover(props: any, monitor) {
        const item = monitor.getItem();
        const targetId = props['id'];

        if (item.id == targetId || !targetId) {
          return;
        }

        props.add(item, targetId);
      },
    },
    (connect, monitor) => ({
      connectDropTarget: connect.dropTarget(),
    }),
  )(dndWrap);

  return dndWrap;
};
