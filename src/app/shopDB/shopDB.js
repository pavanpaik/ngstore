angular.module('ngbps.shopDB', [
  'ngbps.shopDB.admin',
  'ngbps.shopDB.categories',
  'ngbps.shopDB.products'
])

.factory('ShopDB', function(Repository) {
    
  var repository = new Repository('shop');

  var shopDB = {
    admin: repository.get('admin'),
    products: repository.get('products'),
    categories: repository.get('categories')
  };

  return shopDB;
});
