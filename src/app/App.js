import { Route, Switch } from "react-router-dom";
import Nabar from "../components/Nabar";
import Cart from "../features/cart/Cart";
import Catalog from "../features/catalog/Catalog";
import SearchTerm from "../features/searchTerm/SearchTerm";
import { setSearchTerm } from "../features/searchTerm/searchTermSlice";
import CurrencyFilter from "../features/currencyFilter/CurrencyFilter";
import "./App.css";
import ItemDetails from "../components/ItemDetails";

function App({ state, dispatch }) {
  const handleChange = (input) => {
    dispatch(setSearchTerm(input));
  };

  const filteredCatalog = filterCatalog(state.catalog, state.searchTerm);

  return (
    <main className="content main">
      <Nabar itemQuantity={state.cart.length} />
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <Switch>
        <Route
          path="/cart"
          render={() => (
            <Cart
              cart={state.cart}
              dispatch={dispatch}
              currencyFilter={state.currencyFilter}
            />
          )}
        />
        <Route
          path="/catalog"
          render={(props) => (
            <>
              <SearchTerm
                {...props}
                searchTerm={state.searchTerm}
                onChange={handleChange}
              />
              <Catalog
                {...props}
                catalog={filteredCatalog}
                dispatch={dispatch}
                currencyFilter={state.currencyFilter}
                cart={state.cart}
              />
            </>
          )}
        />
        <Route
          path="/item-details/:name"
          render={(props) => (
            <ItemDetails
              {...props}
              catalog={state.catalog}
              item={state.selectedItem}
              dispatch={dispatch}
            />
          )}
        />
      </Switch>
    </main>
  );
}

export default App;

function filterCatalog(catalog, term) {
  return catalog.filter((c) =>
    c.name.toLowerCase().includes(term.toLowerCase()),
  );
}
