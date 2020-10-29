import React,{useState,useEffect} from 'react';
import { Paper,TextField, Button,Table,TableBody,TableCell,TableContainer,TableHead,TableRow , MenuItem, Select} from '@material-ui/core'
import Axios from 'axios';
import {Link} from 'react-router-dom'
import '../../App.css'

const OrderForm = props => {
    
    const theProducts = props.allProducts
    const [product, setProduct] = useState([])
    const [products, setProducts] = useState([])
    const [bill, setBill] = useState(0)
    const [qty, setQty] = useState('')
    const [order, setOrder] = useState({})

   

    useEffect( () => {
        setOrder({products, bill})
    }, [products])

    const handleSubmit = event => {
        event.preventDefault();

        let qtyPrice = Number(product.unitPrice) * Number(qty) 
        setBill(Number(bill) + Number(qtyPrice))

        setProducts(prev => [
            ...prev,
            {
                _id:  product._id,
                id:   product.id,
                name: product.name,
                unitPrice : qtyPrice,       
                qty: qty
            }
        ])
    }
    const handleChange = product => {
        setProduct(product)
    }

    const handleSold = async () => {
         
        Axios.post('http://localhost:9000/orders', order).then(res => {
            alert("Thank you for shopping with us, please collect your recipt!")
            console.log(res)
        })
    }

    return (
       <div>
            <form onSubmit={handleSubmit}> 
                <Select  
                style={{width:"120px",marginTop:"16px" }}
                onChange={e => handleChange(e.target.value)}
                label={"Product"}
                displayEmpty
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                {
                    theProducts.map(product => ( 
                        <MenuItem key={product._id} value={product}> {product.name} </MenuItem>
                    ))
                }
                </Select>
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
                    >Add Product
                </Button>
                
                </form>
                <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>Dessert (100g serving)</TableCell> */}
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Unit Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.unitPrice}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
        <h4>
            Total Bill : {bill}
        </h4>
      
    </TableContainer>
        
       <br/>
        <Button
        variant='contained'
        size='large'
        type='submit'
        color='secondary'
        onClick={handleSold}
        >SOLD</Button>
        <span>  </span>
        <Button
        variant='contained'
        size='large'
        color='secondary'

        ><Link style={{textDecoration:'none', color:"white"}}  to='/all-orders'>
        Show Orders</Link></Button>
        </div>
    )

}

export default OrderForm;