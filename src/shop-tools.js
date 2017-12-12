
//Exercise 1
exports.getPrices = () => {
	return {banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6}
}

//Exercice 2
const products = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ];

exports.countArticles = (products) => {
	return products.length
}