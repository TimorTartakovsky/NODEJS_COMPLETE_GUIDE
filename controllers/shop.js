const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
	Product.fetchAll((allProducts) => {
		res.render('shop/product-list', {
			prods: allProducts,
			pageTitle: 'All Products',
			path: '/products',
		});
	});
}

exports.getIndex = (req, res, next) => {
	Product.fetchAll((allProducts) => {
		res.render('shop/index', {
			prods: allProducts,
			pageTitle: 'Shop',
			path: '/',
		});
	});
}

 exports.getCart = (req, res, next) => {
	res.render('shop/cart', {
		path: '/cart',
		pageTitle: 'Your cart',
	})
 }

 exports.getCheckout = (req, res, next) => {
	res.render('shop/checkout', {
		path: '/checkout',
		pageTitle: 'Checkout',
	})
 }
