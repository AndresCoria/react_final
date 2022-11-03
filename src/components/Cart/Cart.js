import React from 'react'
import { useCartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from '../IteamCart/ItemCart';
import './Cart.css'

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
      <p className='text-cart'>Todavia no has agregado productos al carrito</p>
      <Link to='/' className='link-cart'>Comenzar a comprar</Link>
      </>
    )
  }

  return (
    <>
      {
        cart.map(product => <ItemCart key={ product.id } product={ product }/>)
      }
      <p>
        Total: { totalPrice() }
      </p>
      <Link to='/FormularioCliente'>
          <button>Cargar orden</button>
      </Link>
    </>
  )
}

export default Cart