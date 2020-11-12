import * as React from 'react';
import makeComponentDrag from '../hoc/drag.hoc';
import Entity from './entity';
import Topbar from '../common/topbar';

/**
 * @file 问题单元
 */

class AskEntity extends Entity {
    render() {
        const props = this.props;

        return (<section className="react-entity">
            <Topbar {...props} />
            {this.generateOptions()}
        </section>);
    }
}

export default makeComponentDrag(AskEntity);