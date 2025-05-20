import ProductItem from './ProductItem';

function ProductList({ products, deleteProduct, startEditProduct }) {
  return (
    <div className="space-y-2">
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          deleteProduct={deleteProduct}
          startEditProduct={startEditProduct}
        />
      ))}
    </div>
  );
}

export default ProductList;