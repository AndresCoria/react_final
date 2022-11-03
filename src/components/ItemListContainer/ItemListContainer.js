import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import Title from '../Title/Title'
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = () => {
  // const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let greeting = 'Alojamiento de Servidores de Juegos'
  const {categoriaId} = useParams();


  useEffect(() => {

    const querydb = getFirestore();
    const queryColletion = collection(querydb, 'productos');
    if (categoriaId) {
      const queryFilter = query(queryColletion, where('categoria', '==', categoriaId))
      getDocs(queryFilter)
          .then(res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data() }))))
    } else {
      getDocs(queryColletion)
          .then(res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data() }))))
    }
  }, [categoriaId]);

  return (
    <div>
      <Title greeting={ greeting }/>
      <ItemList data={data} />
    </div>
  )
}

export default ItemListContainer
