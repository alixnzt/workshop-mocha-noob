
var expect = require('chai').expect;
var getPrices = require('../src/shop-tools').getPrices;
var countArticles = require('../src/shop-tools').countArticles;

describe('Exercises', function() {
	it('Should return on Object (basket)', function() {
		expect(getPrices()).to.eql({ banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 });
	})
	
	it('Should return the length where array is null', function() {
		expect(countArticles([])).to.eql(0);
	})

	it('Should return the length where array = products', function() {
		var products = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ]
		expect(countArticles(products)).to.eql(10);
	})
});