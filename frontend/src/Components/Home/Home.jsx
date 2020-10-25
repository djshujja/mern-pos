import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <h5>Welcome To Point Of Sale</h5>
            <Button
                variant='contained'
                size='large'
                color='secondary'
            ><Link style={{textDecoration:"none", color:"white"}} to='/products'>
            Products
            </Link>
                
            </Button>
            

        </div>
    )
}

export default Home
