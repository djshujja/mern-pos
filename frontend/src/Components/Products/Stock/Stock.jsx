import React,{useState, useEffect} from 'react'
import axios from 'axios';
import AddNewStock from './AddNewStock';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom'


const Stock = ({match}) => {
    
    const [product, setProduct] = useState({})    
    
    const id = match.params.id

    useEffect( () => {
        getProduct()
        console.log(product)
    }, [] )

    const getProduct = () => {
        axios.get(`http://localhost:9000/products/${id}`).then( res => {    
        const data = res.data
        console.log(data)
        setProduct({
            id:data.id,
            name:data.name,
            qty:data.qty,
            unitPrice:data.unitPrice
        })    
    })
    }
    const updateStockHandler = updatedQuantity => {
        axios.post(`http://localhost:9000/stock/${id}`, updatedQuantity).then(
            res => {
                console.log(res)
            }
        )
    }


    
    return (
        <div >
            <AddNewStock product={product} updateStock={updateStockHandler} />
            <Button
                variant='contained'
                size='large'
                color='secondary'
            >
                <Link 
                className="Link"
                to="/products">
                    Go Back
                </Link>
            </Button>
        </div>
    )
}

export default Stock
