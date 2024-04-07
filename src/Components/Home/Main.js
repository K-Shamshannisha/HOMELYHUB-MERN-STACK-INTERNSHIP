// importing react library from react in to this js file.
import React from 'react';
// outlet is used to render nested routes.
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
//Arrow function short hand way of declare function
const Main = () => {
 return (
   <div>
     {/* Rendering the Header,Footer and Outlet Component */}
     <Header />
     <Outlet />
     <Footer />
   </div>
 );
};

export default Main;