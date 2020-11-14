import {makeDOMDriver} from '@cycle/dom';
import {makeHTTPDriver} from '@cycle/http';
import {run} from '@cycle/run';
import {html} from 'snabbdom-jsx';
import xs from 'xstream';
import Popup from './components/popup.jsx';

function main(sources) {
    const props = {
        title: 'test component',
        style: '百度世界大会'
    };

    const {isolateSource, isolateSink} = sources.DOM;
    // 隔离 source
    const opts1 = {
        DOM: isolateSource(sources.DOM, 'box1'),
        props: xs.of(props)
    };
    const opts2 = {
        DOM: isolateSource(sources.DOM, 'box2'),
        props: xs.of(props)
    };
    // 隔离 sink
    const box1$ = isolateSink(Popup(opts1).DOM, 'box1');
    const box2$ = isolateSink(Popup(opts2).DOM, 'box2');

    const request$ = sources.DOM.select('body').events('click')
        .map(() => {
            return {
                url: '//test.baidu.com/vdom/dist/index.css',
                category: 'hello',
                method: 'GET'
            };
        });

    // sources.HTTP.select('hello').startWith(null)
    
    const vdom$ = xs.combine(box1$, box2$)
        .map(([box1, box2]) => {
            return (<div className="root">
                <h1>hello world!!</h1>
                {box1}
                <h1>hello world!!</h1>
                {box2}
            </div>);
        });
        
    return {
        DOM: vdom$,
        HTTP: request$
    };
}

const drivers = {
    DOM: makeDOMDriver('#container'),
    HTTP: makeHTTPDriver()
};

export default function initCycle() {
    run(main, drivers);  
}