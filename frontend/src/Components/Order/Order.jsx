import OrderForm from './OrderForm'
import React,{useState,useEffect} from 'react'
import Axios from 'axios'




const Order = props => {



    const [products, setProducts] = useState([])


    useEffect(() => {
        getProducts();


    }, [])

    const getProducts = () => {
        Axios.get('http://localhost:9000/products').then(res =>{
            const data = res.data.products

            setProducts(data);

        })

    }

    return(
        <>
            <OrderForm allProducts={products} />
        </>
    )

}


export default Order;