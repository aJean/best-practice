import React from 'react';
import { toJson } from './visual-parser';
import { connect } from 'dva';
import styles from './style.less';

/**
 * @file 预览区域
 */

function mapStateToProps(state) {
  return { preparing: state.visual.preparing, items: state.visual.items };
}

class Preview extends React.Component<any, any> {
  shouldComponentUpdate(props) {
    return !props.preparing;
  }

  editHandle = (event) => {
    const { dispatch, items } = this.props;
    const id = event.target.getAttribute('data-id');
    const item = items.find((data) => data.id == id);

    item && dispatch({ type: 'visual/edit', payload: { item } });
  };

  render() {
    const { items } = this.props;

    return (
      <div className={styles.visualPreview}>
        {toJson(items).map(({ Tag, id, props }) => (
          <div key={id} className={styles.visualPreviewItem}>
            <Tag {...props} />
            <span className={styles.iconEditor} onClick={this.editHandle} data-id={id} />
          </div>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Preview);
