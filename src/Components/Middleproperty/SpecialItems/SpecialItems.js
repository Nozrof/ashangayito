import React from "react";
import { useState } from "react";
import SpecialMainItems from "./SpecialMainItems";
import { makeStyles } from "@material-ui/core/styles";
import ProductList from "../../../ProductsList/ProductList";
import Singleproduct from "../Singleproduct/Singleproduct";
import { Paper, Grid } from "@material-ui/core";
import { Route } from "react-router-dom";
import SingleproductRoute from "../Singleproduct/SingleproductRoute";
const useStyles = makeStyles((theme) => ({}));

export default function SpecialItems() {
  const styles = useStyles();
  const [items, setItem] = useState({
    products: ProductList,
    selecteditems: null,
  });

  const onitemSelect = (item) => {
    setItem({ products: ProductList, selecteditems: item });
  };

  const eliteItems = items.products.map((products, index) => {
    if (
      products.id === 2 ||
      products.id === 4 ||
      products.id === 5 ||
      products.id === 11 ||
      products.id === 14 ||
      products.id === 15 ||
      products.id === 16 ||
      products.id === 22
    ) {
      return (
        <SpecialMainItems
          products={products}
          key={index}
          itemSelect={() => onitemSelect(products)}
        />
      );
    }
  });

  return (
    <div>
      <Paper elevation={3} variant="outlined" square>
        <Grid container alignItems="baseline" spacing={4}>
          {eliteItems}
        </Grid>
      </Paper>

      <div>
        <SingleproductRoute items={items.selecteditems} />
      </div>
    </div>
  );
}
