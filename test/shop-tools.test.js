
var expect = require('chai').expect;
var getPrices = require('../src/shop-tools.js').getPrices;

describe('Exercise 1', function() {
	it('Should return on Object (basket)', function() {
		expect(getPrices()).to.eql({ banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 });
	})
});