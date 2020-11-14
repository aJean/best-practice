const babel = require('babel-core');
const t = require('babel-types');

const code = `var x = abs(-8);`;

const visitor = {
	Identifier(path) {
		// console.log(path.node.name);
	},

	CallExpression(path) {
		if (path.node.callee.name !== 'abs') return;

		path.replaceWith(t.CallExpression(
			t.MemberExpression(t.identifier('Math'), t.identifier('abs')),
			path.node.arguments
		));
	}
};

const result = babel.transform(code, {
	plugins: [{
		visitor: visitor
	}]
});

console.log(result.code);