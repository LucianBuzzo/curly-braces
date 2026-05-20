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

const srcDir = path.join(__dirname, '..', 'src');

fs.readdirSync(srcDir).sort().forEach(filePath => {
	test(filePath, require(path.join(srcDir, filePath)).parse)
});
