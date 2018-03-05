const braces = ['(', ')', '[', ']', '{', '}']

const isPair = (a, b) => {
	const index = braces.indexOf(a)
	return !(index % 2) && b === braces[index + 1]
}

const parse = ([first, ...rest], stack = []) => {
	if (isPair(stack[stack.length - 1], first)) {
		stack.pop()
	} else {
		stack.push(first)
	}

	return rest.length ? parse(rest, stack) : !stack.length
}

exports.parse = parse
