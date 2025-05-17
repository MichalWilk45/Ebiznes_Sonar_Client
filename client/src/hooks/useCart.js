import { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

// Tworzymy kontekst koszyka
const CartContext = createContext();

// Provider koszyka
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

// Walidacja propsów – zapobiega ostrzeżeniom ESLint
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Hook do używania kontekstu
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
