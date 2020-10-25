import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import LoadingSpinner from '../UI/LoadingSpinner'

const AddProduct = props => {
const [productID, setProductID] = useState('')
const [productName, setProductName] = useState('')


    const handleReset = () => {
        setProductID('')
        setProductName('')
    }

    const handleSubmit = event => {
        event.preventDefault()
        const newProduct = {
            id: productID,
            name: productName
        }

        props.addProduct(newProduct)
        handleReset();
    }

    return (
        <div>
            <h4>Add New Product</h4>
            <form onSubmit={handleSubmit}>
                <TextField 
                    variant='standard'
                    color='secondary'
                    type='text'
                    label='Product ID'
                    value={productID}
                    onChange={e => setProductID(e.target.value)}
                />
                  <TextField 
                    variant='standard'
                    color='secondary'
                    type='text'
                    label='Product Name'
                    value={productName}
                    onChange={e => setProductName(e.target.value)}
                />
                <br/>
                <br/>
                <Button
                variant='contained'
                size='large'
                type='submit'
                color='secondary'
                >Add Product</Button>
             
            </form>        
        </div>
    )
}

export default AddProduct
