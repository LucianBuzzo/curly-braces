const pairs = {
	'(': ')',
	'[': ']',
	'{': '}'
}

exports.parse = ([...items]) => {
	const stack = []

	while (items.length) {
		const c = items.shift()

		if (pairs[stack[stack.length - 1]] === c) {
			stack.pop()
		} else {
			stack.push(c)
		}
	}

	return !stack.length
}
