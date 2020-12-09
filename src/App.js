import { Link, Route, Switch } from 'react-router-dom';
import {Checking, Landing, Savings } from './components'


function App() {
  return (
    <div className="y-app">
      <header>
      <Link to="/">Home</Link>
          <div className="navs">
          <Link to="/">Checking</Link>
          <Link to="/">Savings</Link>
          </div>
      </header>
      
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/checking" component={Checking} />
          <Route exact path="/savings" component={Savings} />
        </Switch>
      </main>

      <footer>
        This is the footer
      </footer>
    </div>
  );
}

export default App;
