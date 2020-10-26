import Product from './Components/Products/Product'
import './App.css';
import Stock from './Components/Products/Stock/Stock';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './Components/Home/Home';
import Order from './Components/Order/Order';



function App() {
  return (
    <div className="App">
        <Router>
        <Link to="/">Home</Link>
        <Link to="/order">Order</Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/order" exact component={Order} />
          <Route path="/products" exact component={Product} />
          <Route path="/stock/:id" exact component={Stock} />

        </Switch>

        </Router>

      
    </div>
  );
}

export default App;
