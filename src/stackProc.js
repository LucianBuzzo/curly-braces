const braces = ['(', ')', '[', ']', '{', '}']

const isPair = (a, b) => {
	const index = braces.indexOf(a)
	return !(index % 2) && b === braces[index + 1]
}

exports.parse = (string) => {
	const stack = []
	const items = string.split('')

	while (items.length) {
		const c = items.shift()

		if (isPair(stack[stack.length - 1], c)) {
			stack.pop()
		} else {
			stack.push(c)
		}
	}

	return !stack.length
}
