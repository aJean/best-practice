import React from 'react';
import { toJsx } from './visual-parser';
import { connect } from 'dva';
import styles from './style.less';

/**
 * @file 预览区域
 */

function mapStateToProps(state) {
  return { preparing:state.visual.preparing, items: state.visual.items };
}

class Preview extends React.Component<any, any> {
  shouldComponentUpdate(props) {
      return !props.preparing;
  }

  render() {
    const { items } = this.props;

    return <div className={styles.visualPreview}>{toJsx(items)}</div>;
  }
}

export default connect(mapStateToProps)(Preview);
