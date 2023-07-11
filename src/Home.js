import React, { useContext } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import snackContext from "./snackContext";
import { NavLink } from "react-router-dom";

function Home() {
  const items = useContext(snackContext);
  return (
    <section className="col-md-8">
      <h2>
        <NavLink to="/form">Add new Item</NavLink>
      </h2>
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Number of snacks:{items.snacks.length}
            </h3>
            <h3 className="font-weight-bold">
              Number of drinks:{items.drinks.length}
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
