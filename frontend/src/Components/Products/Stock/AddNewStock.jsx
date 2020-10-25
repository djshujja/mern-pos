import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {TextField, Button, List, ListItem, ListItemText} from '@material-ui/core'

import './Stock.css'



const AddNewStock = (props) => {

    const {product, updateStock} = props
    const [qty, setQty] = useState(product.qty)
    const [newQuantity, setNewQuantity] = useState(0)
  

    useEffect(() => {
        setQty(product.qty)
    }, [props.product])
    
    
   
    const handleSubmit = event => {
        event.preventDefault()
        updateStock({
            qty:newQuantity
        })
        let qq = Number(qty) + Number(newQuantity)
        setQty(qq)
    }

    return (
        <div className="Card">

            <br/>
            <br/>
            <br/>
            <form onSubmit={handleSubmit} >
            <List>
            <ListItem>
               <span>ID: {product.id}</span>
               
           </ListItem>
           <ListItem>
               <span>Name: {product.name}</span>               
           </ListItem>
           <ListItem>
               <span>Unit Price: {product.unitPrice}</span>
           </ListItem>
           <ListItem>
               <span>Quanity: {qty}</span>
               
           </ListItem>
            </List>
            <TextField
            variant='filled'
            color='secondary'
            type='number'
            label='Product Quantity'
            value={newQuantity}
            onChange={e => setNewQuantity(e.target.value)}
            />
            <Button
            variant='contained'
            size='large'
            type='submit'
            color='secondary'
            >Update Stock</Button>
             
            </form>
        </div>
    )
}

export default AddNewStock
