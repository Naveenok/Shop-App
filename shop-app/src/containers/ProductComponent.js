import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const rederList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four column wide">
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    }).catch((err) => {
      console.log(err);
    });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <>{rederList}</>;
};

export default ProductComponent;
