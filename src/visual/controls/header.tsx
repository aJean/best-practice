import React from 'react';
import { ControlDefine } from './visual-controls';
import styles from './style.less';

/**
 * @file 课程信息
 */

type HeaderPropType = {
  text: string;
};

@ControlDefine
export default class Header extends React.Component<HeaderPropType, any> {
  static controlName = '头部区域';

  static defaultProps = {
    text: 'enro header',
  };

  render() {
    const props = this.props;
    return <div className={styles.visualHeader}>{props.text}</div>;
  }
}
