import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREMENT_CART_CHARACTER_QUANTITY,
  INCREMENT_CART_CHARACTER_QUANTITY,
  REMOVE_FROM_CART,
} from "@/src/store/actions/cart.action";

interface CartState {
  cartCharacters: any[];
  total: number;
}

const initialState: CartState = {
  cartCharacters: [],
  total: 0,
};

const sumTotal = (cartCharacters: any[]) => {
  return cartCharacters
    .map((character: any) => character.characterPrice * character.quantity)
    .reduce((a, b) => a + b, 0);
};

export default function cartReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = { ...action.payload, quantity: 1 };
      const newCartCharacters = [...state.cartCharacters, newItem];
      return {
        ...state,
        cartCharacters: newCartCharacters,
        total: sumTotal(newCartCharacters),
      };
    case REMOVE_FROM_CART:
      const newCartCharactersRemoved = state.cartCharacters.filter(
        (character: any) => character.characterId !== action.payload.characterId
      );
      return {
        ...state,
        cartCharacters: newCartCharactersRemoved,
        total: sumTotal(newCartCharactersRemoved),
      };
    case INCREMENT_CART_CHARACTER_QUANTITY:
      const newCartCharactersIncremented = state.cartCharacters.map(
        (character: any) => {
          if (character.characterId === action.payload.characterId) {
            return { ...character, quantity: character.quantity + 1 };
          } else {
            return character;
          }
        }
      );
      return {
        ...state,
        cartCharacters: newCartCharactersIncremented,
        total: sumTotal(newCartCharactersIncremented),
      };
    case DECREMENT_CART_CHARACTER_QUANTITY:
      const newCartCharactersDecremented = state.cartCharacters.map(
        (character: any) => {
          if (character.characterId === action.payload.characterId) {
            const newQuantity = Math.max(character.quantity - 1, 1);
            return { ...character, quantity: newQuantity };
          } else {
            return character;
          }
        }
      );
      return {
        ...state,
        cartCharacters: newCartCharactersDecremented,
        total: sumTotal(newCartCharactersDecremented),
      };
    case CLEAR_CART:
      return {
        ...state,
        cartCharacters: [],
        total: 0,
      };
    default:
      return state;
  }
}
