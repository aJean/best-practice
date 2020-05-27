import React from 'react';
import { ControlDefine } from './visual-controls';
import styles from './style.less';

/**
 * @file 课程大纲
 */

type ImagePropType = {
  img: string;
};

@ControlDefine
export default class Image extends React.Component<ImagePropType> {
  static controlName = '图片区域';

  static defaultProps = {
    img:
      'https://www.freshnessmag.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_860/MTQ5MTcwMDUwNTEzNzc0MDIx/wtaps-herschel-supply-collection-00.webp',
  };

  render() {
    const { img } = this.props;

    return (
      <div className={styles.visualImage}>
        <img src={img} />
      </div>
    );
  }
}
