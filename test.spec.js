const assert = require('chai').assert;
const { validBraces } = require('./index');

describe('Challenge', function() {
	it('should handle basic valid braces', function() {
		assert.equal(validBraces('()'), true);
		assert.equal(validBraces('[]'), true);
		assert.equal(validBraces('{}'), true);
	});
	it('should handle basic invalid braces', function() {
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
