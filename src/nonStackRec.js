const pairs = {
	'(': ')',
	'[': ']',
	'{': '}'
}

const parse = ([...items], pointer = -1) => {
	const isPair = pairs[items[pointer]] === items[pointer + 1];

	if (isPair) {
		items.splice(pointer, 2)
		pointer--;
	} else {
		pointer++;
	}

	return pointer >= items.length - 1 ? pointer < 0 : parse(items, pointer)
}

exports.parse = parse
