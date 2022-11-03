import React from 'react'
import { useCartContext } from '../Context/CartContext'
// import styled from 'styled-components'

const ItemCart = ( { product } ) => {
  const { removeItem } = useCartContext();
  return (
    <div>
      <img src= { product.img } alt={ product.title }/>
      <div>
        <p>Titulo: { product.title }</p>
        <p>Cantidad: { product.cantidad }</p>
        <p>Precio U: { product.price }</p>
        <p>Subtotal: ${ product.cantidad * product.price }</p>
        <button onClick={() => removeItem(product.id)}>Eliminar</button>
      </div>
    </div>
  )
}

// const cardPrueba = styled.div`
//     display: grid;
//     grid-template-columns; 1fr 1fr;
// `;

export default ItemCart