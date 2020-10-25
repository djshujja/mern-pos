import Product from './Components/Products/Product'
import './App.css';
import Stock from './Components/Products/Stock/Stock';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './Components/Home/Home';



function App() {
  return (
    <div className="App">
        <Router>
        <Link to="/">Home</Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Product} />
          <Route path="/stock/:id" exact component={Stock} />

        </Switch>

        </Router>

      
    </div>
  );
}

export default App;
