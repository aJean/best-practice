import * as React from 'react';

export default function transformElement(TagName: any) {
  return function(props) {
    const setProperties = instance => {
      instance.setProperty('data', { name: 'qy' });
    };

    return <TagName ref={setProperties}>{props.children}</TagName>;
  };
}
