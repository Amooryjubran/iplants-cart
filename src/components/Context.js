import React, { Component } from "react";
import { blogItems } from "../components/Data";

export default class ProductProvider extends Component {
  state = {
    blogItems: blogItems,
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleClose: this.handleClose,
          scrollEffect: this.scrollEffect,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
