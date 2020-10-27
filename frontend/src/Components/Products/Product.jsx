import React,{useState, useEffect} from 'react'
import AddProduct from './AddProduct'
import ProductList from './ProductList'
import axios from 'axios'

const Product = () => {
    
    const [products, setProducts] = useState([])   
    const [isLoading, setIsLoading] = useState(false);

    const loadingProducts = () => {
        axios.get('http://localhost:9000/products').then(res => {
           
            const loadedProducts = []
            for(const key in res.data.products){
                loadedProducts.push({
                    _id:res.data.products[key]._id,
                    id: res.data.products[key].id,
                    name: res.data.products[key].name,
                    qty: res.data.products[key].qty,
                    unitPrice: res.data.products[key].unitPrice
                })
            }
            // console.log(loadedProducts)
            setIsLoading(false)
            setProducts(loadedProducts)
            
        })}

        useEffect(() => {
            setIsLoading(true)
            loadingProducts();
        }
    
        , [])

    const deleteProduct = productID => {
        setIsLoading(true)
       axios.delete(`http://localhost:9000/products/${productID}`).then(res =>  


        setProducts(prevProdcuts => {
            
        return prevProdcuts.filter(product => product.id !== productID)
       }))
         setIsLoading(false)
    }
    

    const addProductHandler = newProduct => {
        setIsLoading(true)
        axios.post('http://localhost:9000/products/', newProduct).then(
            res => {
                setIsLoading(false)
                setProducts(prevProducts => [
                    ...prevProducts,
                    newProduct
                ])

                console.log(res)
            }
        )
    } 
    return (
        <div>
            <AddProduct addProduct={addProductHandler} loading={isLoading} />
            <ProductList products={products} loading={isLoading} deleteProduct={deleteProduct}/>
        </div>
    )
}

export default Product
