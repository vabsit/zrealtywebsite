// src/app/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux'; 
import authSlice from './master/slices/authSlice'; 
import themeSlice from './master/slices/themeSlice'; 
import employeeSlice from './people/slices/EmployeeSlice'; 

// Combine all your reducers
const combinedReducer = combineReducers({
  authdata: authSlice,
  themedata: themeSlice,
  employeedata: employeeSlice,
});

// Root reducer with RESET_STATE handling
const rootReducer = (state: ReturnType<typeof combinedReducer> | undefined, action: AnyAction) => {
  if (action.type === 'RESET_STATE') {
    return combinedReducer(undefined, action); // Resets the entire store
  }
  return combinedReducer(state, action);
};

// Create store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // If you have non-serializable data like Dates
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks for dispatch and selector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Optional: Action creator for resetting store
export const resetStore = () => ({ type: 'RESET_STATE' });
