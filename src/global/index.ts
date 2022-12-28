import {configureStore} from '@reduxjs/toolkit';
import CarReducers from './reducers/cars';

const store = configureStore({
  reducer: {
    car: CarReducers,
  },
});
export type AppDispatch = typeof store.dispatch;
export default store;
