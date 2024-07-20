export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREMENT_CART_CHARACTER_QUANTITY =
  "INCREMENT_CART_CHARACTER_QUANTITY";
export const DECREMENT_CART_CHARACTER_QUANTITY =
  "DECREMENT_CART_CHARACTER_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";

export function addToCart(character: any) {
  return {
    type: ADD_TO_CART,
    payload: character,
  };
}

export function removeFromCart(character: any) {
  return {
    type: REMOVE_FROM_CART,
    payload: character,
  };
}

export function incrementCartCharacterQuantity(character: any) {
  return {
    type: INCREMENT_CART_CHARACTER_QUANTITY,
    payload: character,
  };
}

export function decrementCartCharacterQuantity(character: any) {
  return {
    type: DECREMENT_CART_CHARACTER_QUANTITY,
    payload: character,
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}
