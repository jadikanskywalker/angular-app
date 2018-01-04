var app = angular.module('store', []);

var products = [{
  id: '0',
  name: 'Lounge Chair',
  category: 'Outdoor Decor',
  description: 'This item is the perfect peice for an outdoor relaxation chair. Put it on you porch, or set it out by the pool. Either way, we\'re sure it won\'t disappoint.',
  price: '50',
  image: 'https://s3.dutchcrafters.com/productimages/product_images/pid_46156-Amish-Classic-Chaise-Lounge-Chair--50.jpg',
  images: ['https://s3.dutchcrafters.com/productimages/product_images/pid_46156-Amish-Classic-Chaise-Lounge-Chair--50.jpg', 'https://s3.dutchcrafters.com/productimages/product_images/pid_46156-Amish--Poly-Wood-Classic-Chaise-Lounge-Chair--60.jpg'],
  quantity: 2,
  alias: ['1']
}, {
  id: '1',
  name: 'Chair Foot Rest',
  category: 'Outdoor Decor',
  description: 'No chair is complete without a foot rest, so pair this up with you outdoor lounging chair. It\'s perfect to use in almost any situation, and pairs well with our Lounge Chair.',
  price: '20',
  image: 'https://www.hayesgardenworld.co.uk/sites/default/files/images/products/footstool_main.jpg',
  images: ['https://www.hayesgardenworld.co.uk/sites/default/files/images/products/footstool_main.jpg'],
  quantity: 3,
  alias: ['0']
}, {
  id: '2',
  name: 'Coffee Table',
  category: 'Indoor Appliances',
  description: 'Ever sit down in the morning for a nice cup of coffee. How about at night with your steaming hot tea. Either way, it\'s always important to have somewhere trusty t place your drink.',
  price: '30',
  image: 'https://www.potterybarn.com/pbimgs/ab/images/dp/wcm/201708/0104/griffin-round-coffee-table-wood-metal-j.jpg',
  images: ['https://www.potterybarn.com/pbimgs/ab/images/dp/wcm/201708/0104/griffin-round-coffee-table-wood-metal-j.jpg', 'https://www.potterybarn.com/pbimgs/rk/images/dp/wcm/201708/0101/griffin-round-coffee-table-wood-metal-1-o.jpg'],
  quantity: 1,
  alias: []
}];

app.controller('ProductController', function() {
  this.products = products;
  this.cart = [];
  this.total = 0;
  this.show = false;
  this.id = 0;
  this.option = 1;
  var question = true;
  var problem = false;
  this.setId = function(value) {
    this.id = value;
    $('.modal-one').modal('show');
  }
  this.add = function() {
    if (this.option < this.products[this.id].quantity) {
      this.option++;
    }
  }
  this.sub = function() {
    if (this.option > 1) {
      this.option--;
    }
  }
  this.addOne = function(value) {
    if (this.products[this.cart[value][0]].quantity > 0) {
      this.cart[value][1]++;
      this.products[this.cart[value][0]].quantity--;
      this.total += this.products[this.cart[value][0]].price * 1;
    }
  }
  this.subOne = function(value) {
    if (this.cart[value][1] > 1) {
      this.cart[value][1]--;
      this.products[this.cart[value][0]].quantity++;
      this.total -= this.products[this.cart[value][0]].price * 1;
    }
  }
  this.reset = function() {
    this.option = 1;
    this.products[this.id].image = this.products[this.id].images[0];
  }
  this.changeImage = function(image, value) {
    products[value].image = image;
  }
  this.addToCart = function(value, quantity) {
    this.cart.push([value, quantity]);
    this.total += this.products[this.id].price * quantity;
    this.products[this.id].quantity -= quantity;
    this.show = true;
    $('.modal-one').modal('hide');
  }
  this.removeFromCart = function(value) {
    this.total -= this.products[this.cart[value][0]].price * this.cart[value][1];
    this.products[this.cart[value][0]].quantity += this.cart[value][1];
    this.cart.splice(value, 1);
  }
  this.showCart = function() {
    $('.modal-two').modal('show');
  }
  this.contact = function() {
    $('.modal-three').modal('show');
  }
  this.options = function(type) {
    
  }
});