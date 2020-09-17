import React from "react";

import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/homepage/Home";
import { Switch, Route } from "react-router-dom";
import BlogPage from "./components/Pages/blogs/BlogPage";
import ContactPage from "./components/Pages/contact-us/ContactPage";
import Inspireation from "./components/Pages/inspireation/Inspireation";
import Checkout from "./components/Pages/checkout/Checkout";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blogs" component={BlogPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/inspiration" component={Inspireation} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
