import React from 'react'; //, { createContext, useContext }

// Global State with Redux
import { Provider } from 'react-redux';
import store from './store';

// import { useProductReducer } from './reducers';

// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: '',
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };

export default function StoreProvider(props) {
  return <Provider store={store} {...props} />;
}
