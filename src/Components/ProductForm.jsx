import { useState, useEffect } from 'react';

function ProductForm({ addProduct, editingProduct, updateProduct, products }) {
  const [form, setForm] = useState({
    id: '',
    descripcion: '',
    precioUnitario: '',
    descuento: '',
    stock: ''
  });

  useEffect(() => {
    if (editingProduct) {
      setForm(editingProduct);
    }
  }, [editingProduct]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const errors = [];
    const { id, descripcion, precioUnitario, descuento, stock } = form;

    if (!id || !descripcion || !precioUnitario || !descuento || !stock) {
      errors.push('Todos los campos son obligatorios.');
    }

    if (!editingProduct && products.some(p => p.id === id)) {
      errors.push('El ID ya existe.');
    }

    if (precioUnitario <= 0) {
      errors.push('El precio unitario debe ser mayor a 0.');
    }

    if (descuento < 0 || descuento > 100) {
      errors.push('El descuento debe estar entre 0 y 100.');
    }

    if (stock < 0) {
      errors.push('El stock no puede ser negativo.');
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }

    const precioConDescuento = precioUnitario * (1 - descuento / 100);
    const producto = {
      ...form,
      precioConDescuento: parseFloat(precioConDescuento.toFixed(2))
    };

    if (editingProduct) {
      updateProduct(producto);
    } else {
      addProduct(producto);
    }

    setForm({ id: '', descripcion: '', precioUnitario: '', descuento: '', stock: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <input name="id" placeholder="ID" value={form.id} onChange={handleChange} className="input" required />
      <input name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} className="input" required />
      <input name="precioUnitario" type="number" placeholder="Precio Unitario" value={form.precioUnitario} onChange={handleChange} className="input" required />
      <input name="descuento" type="number" placeholder="Descuento (%)" value={form.descuento} onChange={handleChange} className="input" required />
      <input name="stock" type="number" placeholder="Stock" value={form.stock} onChange={handleChange} className="input" required />
      <button type="submit" className="btn">{editingProduct ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
}

export default ProductForm;