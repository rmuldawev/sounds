import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import ShowPictureSlice from './ShowSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import trackPlayerSlice from './RepeatSlice';

const persistConfig = {
  key: 'toggle',
  storage: AsyncStorage,
};

const repeatModePersistConfig = {
  key: 'repeatMode',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, ShowPictureSlice);
const repeaterReducer = persistReducer(
  repeatModePersistConfig,
  trackPlayerSlice,
);

export const store = configureStore({
  reducer: {
    toggle: persistedReducer,
    repeatMode: repeaterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

declare global {
  type RootState = ReturnType<typeof store.getState>;
}

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
