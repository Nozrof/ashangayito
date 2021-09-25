import React from "react";
import Singleproduct from "./Singleproduct";

export default function SingleproductRoute(props) {
  const { items } = props;
  let singleitems = null;
  if (items != null) {
    singleitems = (
      <div>
        <Singleproduct products={items} />;
      </div>
    );
  }
  return <div>{singleitems}</div>;
}
