import React from 'react';
import { getRenderFactory } from './visual-dnd';

/**
 * @file 解析器
 */

export const toJson = (ast: any, data?: any) => {
  return ast.map((exp: any) => {
    const Tag = getRenderFactory(exp.factory);
    const props = Object.assign({}, Tag.defaultProps, exp.props);

    exp.props = props;
    return { id: exp.id, Tag, props };
  });
};

export const toJsx = (ast: any, data?: any) => {
  return ast.map((exp: any) => {
    const Tag = getRenderFactory(exp.factory);
    const props = Object.assign({}, exp.props);

    return <Tag key={exp.id} {...props} />;
  });
};
