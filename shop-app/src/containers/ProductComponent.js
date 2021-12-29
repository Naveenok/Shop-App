import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const { id, title } = products[0];

  const fetchProducts = async () => {
    const response = await axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    }).catch((err) => {
      console.log(err);
    });
    console.log(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content"></div>
          <div className="header">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
