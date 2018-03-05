const pairs = {
	'(': ')',
	'[': ']',
	'{': '}'
}

const parse = ([first, ...rest], os = []) => {
	const ns = pairs[os[0]] === first ?
		os.slice(1) :
		[first].concat(os)

	return rest.length ? parse(rest, ns) : !ns.length
}

exports.parse = parse
