import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Home from './components/Home';
import CategoryPage from './components/CategoryPage';
import AllDrinks from './components/allDrinksPage';
import DrinkPage from './components/DrinkPage';
import SearchPage from './components/SearchPage';
import DrinkContext from './components/Context/Drinks';
import SearchInputContextProvider from './components/Context/SearchInput';

function Routes() {

  return <BrowserRouter>
    <DrinkContext>
      <SearchInputContextProvider>
      <Switch>
        <Route path='/category/:name' exact component={CategoryPage} />
        <Route path='/all' exact>
          <AllDrinks />
        </Route>
        <Route path='/drink/:id' exact component={DrinkPage} />
        <Route path='/search/:query' exact component={SearchPage} />
        <Route path='/' component={Home} />
      </Switch>
      </SearchInputContextProvider>
    </DrinkContext>
  </BrowserRouter>

}

export default Routes;