import {useMemo, useState } from 'react'  
import {useProducts} from './hooks/useProducts'
import { ProductForm } from './Components/ProductForm'
import ProductList from './Components/ProductList';
import SearchBar from './Components/SearchBar';
import './App.css'
function App() {
 const {
    products,
    editingProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    startEditProduct
  } = useProducts();

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toString().includes(searchTerm)
    );
  }, [searchTerm, products]);

  return (
    <>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Gestión de Productos</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ProductForm
            addProduct={addProduct}
            editingProduct={editingProduct}
            updateProduct={updateProduct}
            products={products}
          />
        <ProductList
            products={filteredProducts}
            deleteProduct={deleteProduct}
            startEditProduct={startEditProduct}
          />
      </div>
    </>
  )
}

export default App
