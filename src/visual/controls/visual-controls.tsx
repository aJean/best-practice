import React from 'react';
import { DragSource } from 'react-dnd';
import styles from '../style.less';

/**
 * @file 控件库，需要导出组件列表
 */

type IControlStatic = {
  controlName: string;
  type?: string;
  defaultProps: any;
};

const CONTROL_LIST: IControlStatic[] = [];
export function ControlDefine<T extends IControlStatic>(Control: T) {
  CONTROL_LIST.push(Control);

  return Control;
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

export default CONTROL_LIST;
