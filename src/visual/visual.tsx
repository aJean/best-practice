import React, { FC } from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import Controls, { ControlItem } from './visual-controls';
import { DndVerticalLayout } from './visual-layout';
import { dndInstall, getDndFactory } from './visual-dnd';
import Preview from './visual-preview';
import Editor from './visual-editor';
import styles from './style.less';
import 'antd/dist/antd.min.css';

/**
 * @file 招生活动可视化
 *       兼容旧的数据
 */

const Visual: FC<any> = () => {
  const controlList = dndInstall(Controls);

  return (
    <DndProvider backend={Backend}>
      <div className={styles.visualMain}>
        <div className={styles.visualControls}>
          <h3>select control</h3>
          {controlList.map((data, i) => (
            <ControlItem key={i} {...data} />
          ))}
        </div>
        <DndVerticalLayout getDndFactory={getDndFactory} />
        <Preview />
        <Editor />
      </div>
    </DndProvider>
  );
};

export default Visual;
