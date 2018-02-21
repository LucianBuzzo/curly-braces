exports.validBraces = function validBraces(braces) {
	const evalWithKContext = (prog) => {
		return function() {
			return eval(prog);
		}.call((() => {
			const K = function(val) {
				if (val.val) {
					return this.val
				}
				var x = (y) => new K(y.val ? val : y);
				x.val = val;
				return x;
			};
			return { K };
		})());
	}

	const s = (val) => `((a => a.val === "${val}" ? a : this.K(false))`;
	const e = (val) => `(new this.K("${val}")))`;
	braces = braces
		.replace(/\{/g, 'xa')
		.replace(/\}/g, 'xb')
		.replace(/\(/g, 'ya')
		.replace(/\)/g, 'yb')
		.replace(/\[/g, 'za')
		.replace(/\]/g, 'zb')
		.replace(/ya/g, s('('))
		.replace(/yb/g, e('('))
		.replace(/xa/g, s('{'))
		.replace(/xb/g, e('{'))
		.replace(/za/g, s('['))
		.replace(/zb/g, e('['))
		.replace(/\)\)\(\(/g, ')) && ((')

	try {
		const res = evalWithKContext(braces)
		return res.val !== false;
	} catch (e) {
		return false;
	}
}
