import { Button, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import {Link } from 'react-router-dom'
import Axios from 'axios'
import React,{useEffect, useState} from 'react'

const OrderDetails = props => {

    const id = props.match.params.id
    const [order, setOrderDetails] = useState({})
    const [products, setProducts] = useState([])

    useEffect(() => {
        Axios.get(`http://localhost:9000/orders/${id}`).then(res => setOrderDetails(res.data) )
    },[])

    useEffect( () =>{
        setProducts(order.products)
    }
    ,[order])

        
    return(
        <div>
            <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Unit Price</TableCell>

            
          </TableRow>
        </TableHead>
        <TableBody>
          
            {
                products ? 
                products.map(p => (
                    <TableRow key={order.name}>
                    <TableCell >
                        {p.name}
                    </TableCell>
                    <TableCell align="right">
                        {p.qty}
                    </TableCell>
                    <TableCell align="right">$ <b>{p.unitPrice}</b></TableCell>
               </TableRow>
                ) ) : null
              
             
        }
          <TableRow>
            <TableCell>
                <b>Sub Total : </b>
            </TableCell>
            <TableCell>
                $ <b> {order.bill} </b>
            </TableCell>
            <TableCell>
            <Button
                    variant='contained'
                    color='primary'
                    >
                        <Link className="Link" to="/order">
                            Go Back
                        </Link>
                    </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )

}

export default OrderDetails;