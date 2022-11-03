import React from 'react'
import { useCartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from '../IteamCart/ItemCart';
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import './Cart.css'
import Swal from 'sweetalert2'

const Cart = () => {
  const { cart, totalPrice } = useCartContext();


  const order = {
    Buyer: {
    name: 'Roberto',
    email: 'Roberto@gmail.com',
    phone: '123456789',
    address: 'Calle falsa 123'
    },
    items: cart.map(product => ({id: product.id, title: product.title, price: product.price, cantidad: product.cantidad })),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const orderColletion = collection(db, 'orders');
    addDoc(orderColletion, order)
    .then( ({ id})  => Swal.fire( 'Tu orden fue realizada, tu numero de orden es: ' + id ));
  }

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
      <button onClick={handleClick}>Cargar orden</button>
    </>
  )
}

export default Cart