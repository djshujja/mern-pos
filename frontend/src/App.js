import Product from './Components/Products/Product'
import './App.css';
import Stock from './Components/Products/Stock/Stock';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './Components/Home/Home';
import Order from './Components/Order/Order';
import Navbar from './Components/UI/Navbar';
import OrderDetails from './Components/Order/OrderDetails';
import OrderList from './Components/Order/OrderList';
import Test from './Components/Test/Test';



function App() {
  return (
    <div className="App">
        <Router>
        {/* <Link to="/">Home</Link>
        <Link to="/order">Order</Link> */}
        <Navbar />
        <Switch>
          <Route path='/test' exact component={Test} />
          <Route path="/" exact component={Home} />
          <Route path="/order" exact component={Order} />
          <Route path="/products" exact component={Product} />
          <Route path="/stock/:id" exact component={Stock} />
          <Route path="/all-orders" exact component={OrderList} />
          <Route path="/order-details/:id" component={OrderDetails} />
        </Switch>

        </Router>

      
    </div>
  );
}

export default App;
