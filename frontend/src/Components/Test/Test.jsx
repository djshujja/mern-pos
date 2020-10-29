import React,{useState, useEffect} from 'react'


const Test = props => {

    const [products, setProducts] = useState([])
    const [order, setOrder] = useState([])
    const [name, setName] = useState('')



    useEffect( () => {
        
        setOrder(prev => [
            ...prev,
{            products:products
}        ])
        console.log(order)

    },[products])

    const handleSubmit = e =>{
        e.preventDefault()

        setProducts({
            name
        })
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id='name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <button type="submit">
                    Submit
                </button>

            </form>
        </div>
    )


}

export default Test;