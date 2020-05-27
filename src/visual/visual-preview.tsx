import React from 'react';
import { toJson } from './visual-parser';
import { connect } from 'dva';
import { VisualModelState } from '@/models/visual';
import styles from './style.less';

/**
 * @file 预览区域
 */

function mapStateToProps({ visual }: { visual: VisualModelState }) {
  return { preparing: visual.preparing, items: visual.items };
}

class Preview extends React.Component<any, any> {
  shouldComponentUpdate(props: VisualModelState) {
    return !props.preparing;
  }

  editHandle = (event: any) => {
    const { dispatch, items } = this.props;
    const id = event.target.getAttribute('data-id');
    const item = items.find((data: any) => data.id == id);

    item && dispatch({ type: 'visual/edit', payload: { item } });
  };

  render() {
    const { items } = this.props;

    return (
      <div className={styles.visualPreview}>
        {toJson(items).map(
          ({ Tag, id, props }: { Tag: React.ComponentClass; id: number; props: any }) => (
            <div key={id} className={styles.visualPreviewItem}>
              <Tag {...props} />
              <span className={styles.iconEditor} onClick={this.editHandle} data-id={id} />
            </div>
          ),
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Preview);
