// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// function AccountIcon() {
//   const navigate = useNavigate();
//   const { accountComponents } = useSelector((state) => state.components); // Ensure this matches your state structure

//   const componentRouteMap = {
//     Login: "/login",
//     Profile: "/profile",
//     Contact: "/contact_page",
//     Setting: "/setting",
//     Help: "/help",
//   };

//   const handleOnClick = (e) => {
//     const componentName = e.target.innerText;
//     const route = componentRouteMap[componentName];
//     if (route) {
//       navigate(route);
//     }
//   };

//   return (
//     <div className="dropdown mb-3 mb-lg-0 mt-3 mt-lg-0 ms-0 ms-lg-3">
//       <button
//         className="btn btn-outline-primary text-white dropdown-toggle px-0"
//         type="button"
//         id="dropDownButton"
//         data-bs-toggle="dropdown"
//         aria-expanded="false"
//       >
//         <i className="bi bi-person-lines-fill"></i> Account
//       </button>
//       <ul
//         className="dropdown-menu dropdown-menu-right"
//         aria-labelledby="dropDownButton"
//       >
//         {accountComponents.map((component, index) => (
//           <li key={index}>
//             <a href="#" className="dropdown-item" onClick={handleOnClick}>
//               {component}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default AccountIcon;
import React from 'react'

function AccountIcon() {
  return (
    <div>AccountIcon</div>
  )
}

export default AccountIcon