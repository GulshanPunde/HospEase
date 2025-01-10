// import React from "react";
// import { setSelectedCategory } from "../../features/product/product";
// import { useSelector, useDispatch } from "react-redux";
// function CategorySelector() {
//   const dispatch = useDispatch();
//   const { categories, selectedCategory } = useSelector(
//     (state) => state.products
//   );
//   const title = selectedCategory;
//   const handleMouseEnter = (e) => {
//     dispatch(setSelectedCategory(e.target.innerText));
//   };
//   return (
//     <div className="dropdown mb-3 mb-lg-0">
//       <button
//         className="btn btn-outline-success text-white dropdown-toggle "
//         type="button"
//         id="dropDownButton1"
//         data-bs-toggle="dropdown"
//       >
//         {title}
//       </button>
//       <ul className="dropdown-menu">
//         {categories.map((catagory) => {
//           return (
//             <li onMouseEnter={handleMouseEnter} key={catagory}>
//               <a href="#" className="dropdown-item pointer">
//                 {catagory}
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default CategorySelector;


import React from 'react'

function CategorySelector() {
  return (
    <div>CategorySelector</div>
  )
}

export default CategorySelector