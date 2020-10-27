import React,{useState, useEffect} from 'react'
import {Button, Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Axios from 'axios';


const OrderList = props => {


    const [orders, setOrders] = useState([])

    useEffect( () => {
        getOrders();
    }, [])


    const getOrders = () => {
        Axios.get("http://localhost:9000/orders").then(res => {

            // console.log(res.data)
            setOrders(res.data)

        })
    }



    
    return(
        <div>
            <h3>Order History</h3>
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell align="right">Products Count</TableCell>
            <TableCell align="right">Total Bill</TableCell>
            <TableCell align="right">Actions</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.name}>
              <TableCell component="th" scope="row">
                {order._id}
              </TableCell>
              <TableCell align="right">{order.products.length}</TableCell>
              <TableCell align="right">$ <b>{order.bill}</b></TableCell>
              <TableCell align="right">
                <Button
                variant='contained'
                color='primary'
                >
                    <Link className="Link" to={`/order-details/${order._id}`}>
                    Show Details
                    </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>




        </div>
    )

}

export default OrderList;