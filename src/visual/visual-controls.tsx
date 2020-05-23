import React from 'react';
import { DragSource } from 'react-dnd';
import styles from './style.less';

/**
 * @file 控件库，需要导出组件列表
 */

class Header extends React.Component<any, any> {
  static controlName = '头部区域';

  static defaultProps = {
    text: 'enro header',
  };

  render() {
    const props = this.props;
    return <div className={styles.visualHeader}>{props.text}</div>;
  }
}

class Image extends React.Component<any, any> {
  static controlName = '图片区域';

  render() {
    const img =
      'https://www.freshnessmag.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_860/MTQ5MTcwMDUwNTEzNzc0MDIx/wtaps-herschel-supply-collection-00.webp';
    return (
      <div className={styles.visualImage}>
        <img src={img} />
      </div>
    );
  }
}

/**
 * 生成预览单元，展示缩略信息，只具有 drag 功能
 */
@DragSource(
  'enro',
  {
    beginDrag(props: any) {
      return { ...props };
    },
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)
export class ControlItem extends React.Component<any, any> {
  render() {
    const { name, connectDragSource } = this.props;
    return connectDragSource(<div className={styles.visualControlItem}>{name}</div>);
  }
}

export default [Header, Image];
