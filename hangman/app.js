const product = {
	name: 'Influence'
};

Object.prototype.hasOwnProperty = () => 'This is a new function';

console.log(product.hasOwnProperty('name'));

console.log(product);
