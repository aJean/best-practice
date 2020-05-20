import React, { FC } from 'react';
import { Row, Col } from 'antd';
import { DndProvider, DragSource, DropTarget } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import styles from './style.less';

/**
 * @file 招生活动可视化
 *       兼容旧的数据
 */

const VisualH5: FC<any> = () => {
  const Test = dragEnable(Header);

  return (
    <DndProvider backend={Backend}>
      <Row>
        <Col span={4}>
          <div className={styles.visualh5Controls}>
            <h3>控件选择</h3>
            <Test left={0} top={0} />
          </div>
        </Col>
        <Col span={12}>
          <Container></Container>
        </Col>
        <Col span={8}></Col>
      </Row>
    </DndProvider>
  );
};

class Header extends React.Component<any, any> {
  static defaultProps = {
    text: 'header',
  };

  render() {
    const props = this.props;
    return <div className={styles.visualh5Header}>{props.text}</div>;
  }
}

const Factory = {};
function dragEnable(Component: any) {
  const factoryName = Component.name;

  @DragSource(
    'enro',
    {
      beginDrag(props: any) {
        return { ...props, factory: factoryName};
      },
    },
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    }),
  )
  class Wrapper extends React.PureComponent<any, any> {
    static defaultProps = {
      left: 0,
      top: 0,
    };

    getStyle = () => {
      const { left, top } = this.props;

      const transform = `translate(${left}px, ${top}px)`;
      return {
        position: 'absolute',
        transform,
      } as React.CSSProperties;
    };

    render() {
      const props = this.props;
      return props.connectDragSource(
        <div className={styles.visualh5ControlsItem} style={this.getStyle()}>
          <Component {...props} />
        </div>,
      );
    }
  }

  Factory[factoryName] = Wrapper;
  return Wrapper;
}

@DropTarget(
  'enro',
  {
    drop: (props, monitor, container) => {
      if (!container) {
        return;
      }

      const delta: any = monitor.getDifferenceFromInitialOffset();

      const item = monitor.getItem();
      const left = Math.round(delta.x + item.left);
      const top = Math.round(delta.y + item.top);

      container.add({ ...item, left, top });
    },
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
)
class Container extends React.PureComponent<any, any> {
  static uid = 2;

  state = {
    boxes: [
      { id: 1, top: 20, left: 80, text: 'Drag me around', factory: 'Header' },
      { id: 2, top: 180, left: 20, text: 'Drag me too', factory: 'Header' },
    ],
  };

  add = (item: any) => {
    const { boxes } = this.state;

    if (!item.id) {
      item.id = ++Container.uid;
    }

    const oldItem = boxes.find(data => data.id == item.id);
    // 更新旧数据
    if (oldItem) {
      oldItem.left = item.left;
      oldItem.top = item.top;

      this.setState({
        boxes: [...boxes],
      });
    } else {
      this.setState({
        boxes: [...boxes, item],
      });
    }
  };

  render() {
    const { boxes } = this.state;

    return this.props.connectDropTarget(
      <div className={styles.visualLayout}>
        {boxes.map((data, i) => {
          const Tag: any = Factory[data.factory];
          return <Tag key={i} {...data}></Tag>;
        })}
      </div>,
    );
  }
}

export default VisualH5;
