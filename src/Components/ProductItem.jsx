function ProductItem({ product, deleteProduct, startEditProduct }) {
  return (
    <div className="border p-2 rounded shadow flex justify-between items-center">
      <div>
        <p><strong>{product.descripcion}</strong> (ID: {product.id})</p>
        <p>Precio: ${product.precioUnitario} | Descuento: {product.descuento}%</p>
        <p>Con Descuento: ${product.precioConDescuento} | Stock: {product.stock}</p>
      </div>
      <div className="space-x-2">
        <button onClick={() => startEditProduct(product)} className="btn-edit">Editar</button>
        <button onClick={() => deleteProduct(product.id)} className="btn-delete">Eliminar</button>
      </div>
    </div>
  );
}

export default ProductItem;