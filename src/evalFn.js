const K = (_ = false) =>
	Object.assign((y) => K(y._ ? _ : y), { _ })

const s = (c) => `((a => a._ === '${c}' ? a : K())`
const e = (c) => `(K('${c}')))`
const replacer = (x) => (m) => m === x ? s(x) : e(x)

exports.parse = function validBraces(braces) {
	braces = braces
		.replace(/(\(|\))/g, replacer('('))
		.replace(/(\{|\})/g, replacer('{'))
		.replace(/(\[|\])/g, replacer('['))
		.replace(/\)\)\(\(/g, ')) && ((')

	try {
		const res = eval(braces)
		return res._ !== false
	} catch (e) {
		return false
	}
}
