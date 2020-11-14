import {html} from 'snabbdom-jsx';
import {h, init} from 'snabbdom';
import classModule from 'snabbdom/modules/class';
import heroModule from 'snabbdom/modules/hero';
import styleModule from 'snabbdom/modules/style';
import eventModule from 'snabbdom/modules/eventlisteners';

/**
 * @file vdom 创建
 *     attachModules -> patch -> diff -> createEm -> change
 */

const patch = init([classModule, heroModule, styleModule, eventModule]);

const data = {
    selected: {},
    movies: [
        {rank: 1, title: 'This is an', desc: 'Lorem ipsum dolor sit amet, sed pede integer vitae bibendum, accumsan sit, vulputate aenean tempora ipsum. Lorem sed id et metus, eros posuere suspendisse nec nunc justo, fusce augue placerat nibh purus suspendisse. Aliquam aliquam, ut eget. Mollis a eget sed nibh tincidunt nec, mi integer, proin magna lacus iaculis tortor. Aliquam vel arcu arcu, vivamus a urna fames felis vel wisi, cursus tortor nec erat dignissim cras sem, mauris ac venenatis tellus elit.'},
        {rank: 2, title: 'example of', desc: 'Consequuntur ipsum nulla, consequat curabitur in magnis risus. Taciti mattis bibendum tellus nibh, at dui neque eget, odio pede ut, sapien pede, ipsum ut. Sagittis dui, sodales sem, praesent ipsum conubia eget lorem lobortis wisi.'},
        {rank: 3, title: 'Snabbdom', desc: 'Quam lorem aliquam fusce wisi, urna purus ipsum pharetra sed, at cras sodales enim vestibulum odio cras, luctus integer phasellus.'},
        {rank: 4, title: 'doing hero transitions', desc: 'Et orci hac ultrices id in. Diam ultrices luctus egestas, sem aliquam auctor molestie odio laoreet. Pede nam cubilia, diam vestibulum ornare natoque, aenean etiam fusce id, eget dictum blandit et mauris mauris. Metus amet ad, elit porttitor a aliquet commodo lacus, integer neque imperdiet augue laoreet, nonummy turpis lacus sed pulvinar condimentum platea. Wisi eleifend quis, tristique dictum, ac dictumst. Sem nec tristique vel vehicula fringilla, nibh eu et posuere mi rhoncus.'},
        {rank: 5, title: 'using the', desc: 'Pede nam cubilia, diam vestibulum ornare natoque, aenean etiam fusce id, eget dictum blandit et mauris mauris. Metus amet ad, elit porttitor a aliquet commodo lacus, integer neque imperdiet augue laoreet, nonummy turpis lacus sed pulvinar condimentum platea. Wisi eleifend quis, tristique dictum, ac dictumst. Sem nec tristique vel vehicula fringilla, nibh eu et posuere mi rhoncus.'},
        {rank: 6, title: 'module for hero transitions', desc: 'Sapien laoreet, ligula elit tortor nulla pellentesque, maecenas enim turpis, quae duis venenatis vivamus ultricies, nunc imperdiet sollicitudin ipsum malesuada. Ut sem. Wisi fusce nullam nibh enim. Nisl hymenaeos id sed sed in. Proin leo et, pulvinar nunc pede laoreet.'},
        {rank: 7, title: 'click on ar element in', desc: 'Accumsan quia, id nascetur dui et congue erat, id excepteur, primis ratione nec. At nulla et. Suspendisse lobortis, lobortis in tortor fringilla, duis adipiscing vestibulum voluptates sociosqu auctor.'},
        {rank: 8, title: 'the list', desc: 'Ante tellus egestas vel hymenaeos, ut viverra nibh ut, ipsum nibh donec donec dolor. Eros ridiculus vel egestas convallis ipsum, commodo ut venenatis nullam porta iaculis, suspendisse ante proin leo, felis risus etiam.'},
        {rank: 9, title: 'to witness', desc: 'Metus amet ad, elit porttitor a aliquet commodo lacus, integer neque imperdiet augue laoreet, nonummy turpis lacus sed pulvinar condimentum platea. Wisi eleifend quis, tristique dictum, ac dictumst.'},
        {rank: 10, title: 'the effect', desc: 'Et orci hac ultrices id in. Diam ultrices luctus egestas, sem aliquam auctor molestie odio laoreet. Pede nam cubilia, diam vestibulum ornare natoque, aenean etiam fusce id, eget dictum blandit et mauris mauris'}
    ]
};

function select(m) {
    console.log(m);
    data.selected = m;
    render();
}

function render() {
    // vnode = patch(vnode, detailView(data.select));
}

const fadeInOutStyle = {
    opacity: 0,
    delayed: {
        opacity: 1
    },
    remove: {
        opacity: 0
    }
};

const animStyle = {
    transform: 'translateY(-2em)',
    delayed: {
        transform: 'translate(0)'
    },
    destroy: {
        transform: 'translateY(-2em)'
    }
};

const listStyle = {
    opacity: 0,
    delayed: {opacity: '1'},
    remove: {
        opacity: 0,
        position: 'absolute',
        top: '0',
        left: '0'
    }
};

function listView(movies) {
    return (<div classNames="page" style={fadeInOutStyle}>
        <div classNames="header">
            <div classNames="header-title" style={animStyle}>Top 10 movies</div>
            <div classNames="spacer"></div>
        </div>
        <div classNames="page-content">
            <div classNames="list" style={listStyle}>
                { movies.map((movie) => {
                    return (<div classNames="row">
                        <div classNames="hero">
                            <span hero={{id: 'rank' + movie.rank}}>{movie.rank}</span>
                        </div>
                        <div hero={{id: movie.title}} classNames="hero">{movie.title}</div>
                    </div>);
                }) }
            </div>
        </div>
    </div>);
}

function view(data) {
    return h('div.page-container', [listView(data.movies)]);
}

export default function initSnabb () {
    const container = document.getElementById('container');
    let vnode = patch(container, view(data));
}