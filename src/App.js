import React from 'react';
import {
  BrowserRouter,
  // Link,
  Route,
  Switch
} from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import CategoryPage from './components/CategoryPage';
import AllDrinks from './components/allDrinksPage';
import DrinkPage from './components/DrinkPage';
import DrinkContext from './components/Context/Drinks';

function App() {


  return <BrowserRouter>
    <DrinkContext>
      <Header />
      <Switch>
        <Route path='/category/:name' component={CategoryPage} />
        <Route path='/all'>
          <AllDrinks />
        </Route>
        <Route path='/drink/:id' component={DrinkPage} />
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
    </DrinkContext>
  </BrowserRouter>

}

export default App;
