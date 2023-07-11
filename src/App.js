import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";
import snackContext from "./snackContext";
import ItemForm from "./Form";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getItems("snacks");
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getItems("drinks");
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <snackContext.Provider value={{ snacks: snacks, drinks: drinks }}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/">
                <Home snacks={snacks} />
              </Route>
              <Route exact path="/snacks">
                <Menu items={snacks} title="Snacks" />
              </Route>
              <Route path="/snacks/:id">
                <Item items={snacks} cantFind="/snacks" />
              </Route>
              <Route exact path="/drinks">
                <Menu items={drinks} title="Drinks" />
              </Route>
              <Route path="/drinks/:id">
                <Item items={drinks} cantFind="/Drinks" />
              </Route>
              <Route exact path="/form">
                <ItemForm />
              </Route>
              <Route>
                <p>Hmmm. I can't seem to find what you want.</p>
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    </snackContext.Provider>
  );
}

export default App;
