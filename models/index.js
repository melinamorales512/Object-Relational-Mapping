// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// belongsTo Category (products)
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// have many (Products)

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// belongToMany Tags 
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// belongToMany (Products) 
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
