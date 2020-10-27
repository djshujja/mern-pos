import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import './Home.css'


const Home = () => {
    return (
        <div>
            <h3>Welcome To Point Of Sale</h3>
            <Button
                variant='contained'
                size='large'
                color='secondary'
            ><Link style={{textDecoration:"none", color:"white"}} to='/products'>
            Products
            </Link>
            </Button>
            <span> </span>
            <Button
                variant='contained'
                size='large'
                color='secondary'

            >
                <Link style={{textDecoration:"none", color:"white"}} to="/order">
                    Order
                </Link>
            </Button>
            

        </div>
    )
}

export default Home
