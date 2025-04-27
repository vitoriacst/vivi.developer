import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

type InitialState = {
  page: string;
};

const initialState: InitialState = {
  page: 'about'
};


const visibilitySlice = createSlice({
  name: 'visibility',
  initialState,
  reducers: {
    changeVisibility: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    }
  }
});

export const { changeVisibility } = visibilitySlice.actions;

export const store = configureStore({
  reducer: {
    visibility: visibilitySlice.reducer
  }
})


type RootState = ReturnType<typeof store.getState>

type Dispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<Dispatch>()

export const useAppSelector = useSelector.withTypes<RootState>()
