import { useState } from 'react'
import {useProducts} from './hooks/useProducts'
import { ProductForm } from './Components/ProductForm'
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

   
  return (
    <>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Gestión de Productos</h1>
        <ProductForm
            addProduct={addProduct}
            editingProduct={editingProduct}
            updateProduct={updateProduct}
            products={products}
          />
        <ProductList
            products={products}
            deleteProduct={deleteProduct}
            startEditProduct={startEditProduct}
          />
      </div>
    </>
  )
}

export default App
