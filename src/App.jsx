import { useState } from 'react'
import {useProducts} from './hooks/useProducts'
import './App.css'
import { ProductForm } from './Components/ProductForm'
function App() {
 const {
    products,
    editingProduct,
    addProduct,
    updateProduct,
    
  } = useProducts();
  return (
    <>
     <ProductForm
        addProduct={addProduct}
        editingProduct={editingProduct}
        updateProduct={updateProduct}
        products={products}
      />
    
    </>
  )
}

export default App
