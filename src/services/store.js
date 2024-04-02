import { configureStore } from "@reduxjs/toolkit"
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

let initialState = { listOfEmployees: [] };

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            const listWithNewEmployee = [...state.listOfEmployees, action.payload]
            return { ...state, listOfEmployees: listWithNewEmployee };
        default:
            return state;
    }
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore(
    {
        preloadedState: initialState,
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    }
)