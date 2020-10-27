    import React from 'react';
    import Table from '@material-ui/core/Table';
    import TableBody from '@material-ui/core/TableBody';
    import TableCell from '@material-ui/core/TableCell';
    import TableContainer from '@material-ui/core/TableContainer';
    import TableHead from '@material-ui/core/TableHead';
    import TableRow from '@material-ui/core/TableRow';
    import Paper from '@material-ui/core/Paper';
    import { Button } from '@material-ui/core';
    import LoadingSpinner from '../UI/LoadingSpinner'
import { Link } from 'react-router-dom';
    
const ProductList = props => {

    const products = props.products
    
    const tableStyle = {
        maxWidth:"80%",
        margin:'auto'
    }
    
    
      return (
          <div style={
            tableStyle
          }
          >
              <TableContainer component={Paper} >
          <Table 
           
          >
            <TableHead>
              <TableRow >
                <TableCell align="center">Product ID</TableCell>
                <TableCell align="center">Product Name</TableCell>
                <TableCell align="center">Product Quantity</TableCell>
                <TableCell align="center">Unit Price</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             {
                 products.map(product => (
                    <TableRow key={product._id}>
                    <TableCell
                    align="center"
                    scope="row">
                      {product.id}
                    </TableCell>
                    
                    <TableCell
                    align="center"
                    >{product.name}</TableCell>
                    
                    <TableCell
                    align="center"
                    scope="row">
                      {product.qty}
                    </TableCell>
                    <TableCell
                    align="center"
                    >{product.unitPrice}</TableCell>
                    <TableCell
                    align="center"
                    ><Button 
                    variant='contained'
                    size='small'
                    type='submit'
                    color='secondary' 
                    style={{width:"100px"}}
                    onClick={props.deleteProduct.bind(this,product.id)}
                    >
                    Delete
                </Button>
                <br/>
                <br/>
                <Button 
                    variant='contained'
                    size='small'
                    type='submit'
                    color='secondary' 
                    style={{width:"100px"}}
                    >
                    <Link style={{textDecoration:"none", color:"white"}} to={`/stock/${product.id}`}>
                     Add Stock
                    </Link>
                </Button></TableCell>   
                    
                    
                   

                    


                    
                  
                  </TableRow>
                 ))
               
             }
             
            </TableBody>
          </Table>
          </TableContainer>
          {
                  props.loading ? <><br/> <LoadingSpinner/> </> : null
        }

        </div>
      );
    }
    



   


export default ProductList
