import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../features/product/product";

function ProductList() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.products);

  const handleOnClick = (e) => {
    dispatch(setSelectedCategory(e.target.innerText));
  };

  return (
    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
      <h6 className="text-uppercase fw-bold mb-4 text-light">Products</h6>
      {categories.map((category) => (
        <p key={category}>
          <a
            href="#!"
            className="text-reset "
            onClick={handleOnClick}
            style={{ textDecoration: "none" }}
          >
            {category}
          </a>
        </p>
      ))}
    </div>
  );
}

export default ProductList;
