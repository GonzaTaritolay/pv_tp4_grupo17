import { useState, useCallback, useEffect } from 'react';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    console.log('Productos actualizados:', products);
  }, [products]);

  const addProduct = useCallback((product) => {
    setProducts(prev => [...prev, product]);
  }, []);

  const updateProduct = useCallback((updatedProduct) => {
    setProducts(prev =>
      prev.map(p => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setEditingProduct(null);
  }, []);

  const deleteProduct = useCallback((id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  }, []);

  const startEditProduct = useCallback((product) => {
    setEditingProduct(product);
  }, []);

  return {
    products,
    editingProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    startEditProduct
  };
}
