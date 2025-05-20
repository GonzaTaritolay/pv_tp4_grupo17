# TP4 

## Integrantes del grupo 17

- Gonzalo Ricardo Taritolay - [GonzaTaritolay](https://github.com/GonzaTaritolay)
- Aldo Dante Antivilo - [AldoDante](https://github.com/AldoDante)
- Julio Nahuel Heredia - [Jnh1212](https://github.com/Jnh1212)

## Descripción
Aplicación web desarrollada con React para gestionar una lista de productos. Permite al usuario:

Agregar productos mediante un formulario.

Buscar productos por descripción o ID de forma reactiva.

Modificar productos existentes.

Eliminar productos de la lista.

Se implementan los hooks useState, useEffect, useMemo y useCallback para el manejo eficiente del estado, lógica de negocio y rendimiento.

La interfaz está organizada con componentes reutilizables y usa eventos como onClick, onChange y onSubmit. La estructura sigue principios de separación de responsabilidades y reutilización de código.

Validaciones implementadas

Durante el ingreso de productos en el formulario se aplican las siguientes validaciones:

Todos los campos son obligatorios.

El ID debe ser único, no se permite duplicados al agregar, No se permiten Id alfanumericos solo numeros enteros positivos mayores a cero.

El precio unitario debe ser mayor a 0.

El descuento debe estar entre 0 y 100.

El stock no puede ser negativo.

Si hay errores, se muestran al usuario mediante mensajes emergentes (alert).

