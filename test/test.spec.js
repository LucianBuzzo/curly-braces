const assert = require('chai').assert;
const path = require('path');
const fs = require('fs');

const test = (name, validBraces) => {
	describe(`${name} implementation`, function() {
		it('should handle basic valid braces', function() {
			assert.equal(validBraces('()'), true);
			assert.equal(validBraces('[]'), true);
			assert.equal(validBraces('{}'), true);
		});

		it('should handle basic invalid braces', function() {
			assert.equal(validBraces(']'), false);
			assert.equal(validBraces('(}'), false);
			assert.equal(validBraces('[(])'), false);
			assert.equal(validBraces('(})'), false);
		});

		it('should handle longer valid braces', function() {
			assert.equal(validBraces('(){}[]'), true);
			assert.equal(validBraces('([{}])'), true);
		});

		it('should handle longer invalid braces', function() {
			assert.equal(validBraces(')(}{]['), false);
			assert.equal(validBraces('(((({{'), false);
		});

		it('should handle tricky valid braces', function() {
			assert.equal(validBraces('({})[({})]'), true);
			assert.equal(validBraces('(({{[[]]}}))'), true);
			assert.equal(validBraces('{}({})[]'), true);
		});

		it('should handle tricky invalid braces', function() {
			assert.equal(validBraces('())({}}{()][]['), false);
			assert.equal(validBraces('}}]]))}])'), false);
			assert.equal(validBraces('([[{{{}}}]]))}])'), false);
		});
	});
};

const implementationFiles = fs.readdirSync('src')
	.filter(filePath => path.extname(filePath) === '.js')
	.sort();

assert.isAbove(implementationFiles.length, 0, 'expected at least one src implementation');

implementationFiles.forEach(filePath => {
	test(filePath, require(path.join('..', 'src', filePath)).parse)
});
