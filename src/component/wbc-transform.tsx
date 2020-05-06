import * as React from 'react';
import * as ReactDom from 'react-dom';

/**
 * @file react 需要对 webcomponent 传入属性做处理
 */

export default function transformElement(TagName: any) {
  return function (props) {
    // 常规属性需要做一下判断比如 className htmlFor dangerouslySetInnerHTML

    const fix = (instance) => {
      instance.setAttribute('data', props.data);
      // 直接渲染到内部的 slots 上
      ReactDom.render(props.slots, instance.slots);
    };

    return <TagName ref={fix}>{props.children}</TagName>;
  };
}
