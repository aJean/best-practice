import {Network, DataSet} from 'vis';
import initSaga from '../generator/saga-take';

/**
 * @file vis draw 流程图
 */


const nodes = new DataSet([
    {id: 1, label: 'Node 1', title: 'I have a popup!', group: 1},
    {id: 2, label: 'Node 2', title: 'I have a popup!', group: 1},
    {id: 3, label: 'Node 3', title: 'I have a popup!'},
    {id: 4, label: 'Node 4', title: 'I have a popup!'},
    {id: 5, label: 'Node 5', title: 'I have a popup!'}
]);

// create an array with edges
const edges = new DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5}
]);

const data: any = {
    nodes: nodes,
    edges: edges
};
const options = {
    interaction:{hover:true},
    manipulation: {
        initiallyActive: true,
        enabled: true,
        addEdge: true,
    }
};

export default {
    init(el) {
        const nw = new Network(el, data, options);
        nw.on('click', params => {
            if (params.nodes.length) {
                
            } else if (!params.items.length) {
                nodes.update([{id: 11, label: 'test', title: ''}]);
            }
        });

        nw.on('dragStart', params => {
            if (params.nodes.length) {
                console.log(111)
                
            }
        });

        initSaga();
    }
}