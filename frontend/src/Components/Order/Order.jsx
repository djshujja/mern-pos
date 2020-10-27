import OrderForm from './OrderForm'
import OrderList from './OrderList'
import React,{useState,useEffect} from 'react'
import Axios from 'axios'




const Order = props => {


    const [orders, setOrders] = useState([])
    const [products, setProducts] = useState([])


    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        getOrders();

    }, [products])

    const getProducts = () => {
        Axios.get('http://localhost:9000/products').then(res =>{
            const data = res.data.products

            setProducts(data);

        })

    }

    const getOrders = () => {
        Axios.get("http://localhost:9000/orders").then(res => {

            // console.log(res.data)
            setOrders(res.data)

        })
    }



    

    return(
        <>
            <OrderForm allProducts={products}  />           
        </>
    )

}


export default Order;