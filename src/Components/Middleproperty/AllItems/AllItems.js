import { Grid } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import AllMainItems from "./AllMainItems";
import { makeStyles } from "@material-ui/core/styles";
import ProductList from "../../../ProductsList/ProductList";
import { Paper } from "@material-ui/core";
import "./AllMainItems.css";
import ReactPaginate from "react-paginate";
import SingleproductRoute from "../Singleproduct/SingleproductRoute";

const useStyles = makeStyles((theme) => ({
  Grid: {
    marginBottom: theme.spacing(2),
  },
}));

export default function AllItems() {
  const styles = useStyles();
  const [items, setItem] = useState({
    products: ProductList,
    selecteditems: null,
  });
  const [pageNumber, setpageNumber] = useState(0);

  const productPerPage = 8;
  const productsVisited = pageNumber * productPerPage;
  const [products, setproducts] = useState(items.products);
  const displayProducts = products
    .slice(productsVisited, productsVisited + productPerPage)
    .map((products) => {
      return (
        <AllMainItems
          products={products}
          key={products.id}
          itemSelect={() => onitemSelect(products)}
        />
      );
    });
  const pageCount = Math.ceil(products.length / productPerPage);

  const onitemSelect = (item) => {
    setItem({ products: ProductList, selecteditems: item });
  };

  const changePage = ({ selected }) => {
    setpageNumber(selected);
  };

  return (
    <div>
      <Paper elevation={3} variant="outlined" square>
        <Grid
          container
          alignItems="baseline"
          spacing={4}
          className={styles.Grid}
        >
          {displayProducts}
        </Grid>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </Paper>
      <div>
        <div>
          <SingleproductRoute items={items.selecteditems} />
        </div>
      </div>
    </div>
  );
}
