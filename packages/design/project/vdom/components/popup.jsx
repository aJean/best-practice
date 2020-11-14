import {makeDOMDriver} from '@cycle/dom';
import {makeHTTPDriver} from '@cycle/http';
import {html} from 'snabbdom-jsx';
import xs from 'xstream';
import '../popup.less';
import '../lib/saga';

function main(source) {
    const domSource = source.DOM;
    const props$ = source.props;
    const data$ = domSource.select('.popup-close').events('click');

    const state$ = model(props$, data$);
    const vdom$ = view(state$);

    return {
        DOM: vdom$
    };
}

function model(props$, data$) {
    return props$.map(props =>  data$.map(data => {
            return {
                title: props.title,
                style: props.style,
                hidden: true
            };
        }).startWith(props)
    ).flatten();
}

function view(state$) {
    return state$.map(data => {
        return (<section className={data.hidden ? 'popup-hide' : 'popup'}>
            <span className="popup-close">close</span>
            <h1>{data.title}</h1>
            <input className="popup-input" type="text" value={data.style}></input>
            <div className="popup-content">隔离 component example !!</div>
        </section>);
    });
}

export default main;