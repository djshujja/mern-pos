import React,{useState} from 'react';
import {TextField, Button,InputLabel, MenuItem, Select} from '@material-ui/core'

const OrderForm = props => {
    
    const theProducts = props.allProducts
    const [product, setProduct] = useState([])
    const [products, setProducts] = useState([])
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [qty, setQty] = useState('')


    const showProducts = () => {
        console.log(products)
    }

    const handleSubmit = event => {
        event.preventDefault();
        setProducts(prev => [
            ...prev,
            {
                id: product.id,
                name: product.name,
                qty: product.qty
            }
        ])
    }
    const handleChange = product => {
        console.log(product)
        setProduct(product)
    }

    return (
       <div>
            <form onSubmit={handleSubmit}>

                    
                <InputLabel id="demo-simple-select-label">Product</InputLabel>
                <Select
                
                style={{width:"120px"}}
                value={products}
                onChange={e => handleChange(e.target.value)}
                >
                {
                    theProducts.map(product => (
                        
                        <MenuItem key={product._id} value={product}> {product.name} </MenuItem>
                
                    ))
                }

                </Select>
                
                {/* <TextField 
                variant='standard'
                color='secondary'
                type='text'
                label='Product ID'
                // value={id}
                // onChange={e => setId(e.target.value)}
            /> */}
            <select
            // value={product}
            // onChange={event => handleChange(event.target.value)}
            
            value={products}
            onChange={e => handleChange(e.target)}
            
            >
                {/* {
                    theProducts.map(currentProduct => (
                        <option key={currentProduct._id} value={currentProduct} > {currentProduct.name} </option>
                    ))
                } */}

                    {theProducts.map(product => (
                        
                        <option  key={product._id} value={product}> {product.name} </option>
                
                    ))}
            </select>



            <TextField 
                variant='standard'
                color='secondary'
                type='text'
                label='Product Name'
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <TextField      
                variant='standard'
                color='secondary'
                type='text'
                label='Product Quantity'
                value={qty}
                onChange={e => setQty(e.target.value)}
            />
             <Button
                variant='contained'
                size='large'
                type='submit'
                color='secondary'
                >Place Order</Button>

            </form>

            <Button
                variant='contained'
                size='large'
                onClick={showProducts}
                color='secondary'
                >Show Products Array []</Button>
        </div>
    )

}

export default OrderForm;