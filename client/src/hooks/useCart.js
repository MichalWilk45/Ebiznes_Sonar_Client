import { useState, useContext, useMemo, createContext } from "react";
import PropTypes from "prop-types";

// Tworzymy kontekst koszyka
const CartContext = createContext();

// Provider koszyka
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Zapamiętujemy value, żeby nie zmieniało się przy każdym renderze
  const value = useMemo(() => ({ cartItems, setCartItems }), [cartItems, setCartItems]);

  return (
    <CartContext.Provider value={value}>
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
