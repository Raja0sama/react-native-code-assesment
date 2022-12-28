import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CarData {
  model: string;
  basePrice: string;
  features: {name: string; price: string}[];
  exteriorColors: {name: string; price: number | string}[];
  interiorOptions: {name: string; price: string}[];
  autopilotOptions: {name: string; price: string}[];
  imageLink: string;
}

export interface CarState {
  data: CarData[];
  loading: boolean;
  error: string | null;
}

const initialState: CarState = {
  data: [] as CarData[],
  loading: false,
  error: null,
};

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    fetchCarStart: (state: CarState) => {
      state.loading = true;
      state.error = null;
    },
    fetchCarSuccess: (state: CarState, action: PayloadAction<CarData[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchCarError: (state: CarState, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchCarStart, fetchCarSuccess, fetchCarError} = carSlice.actions;
export default carSlice.reducer;

export const fetchCars = () => async (dispatch: Function) => {
  try {
    dispatch(fetchCarStart());
    const response = await fetch('http://10.0.2.2:8080/cars');
    const cars = await response.json();
    dispatch(fetchCarSuccess(cars));
  } catch (error: any) {
    dispatch(fetchCarError(error.message));
  }
};
