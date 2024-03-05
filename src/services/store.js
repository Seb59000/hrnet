import { configureStore } from "@reduxjs/toolkit"

let initialState = { listOfEmployees: '' };

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            const listWithNewEmployee = [...state.listOfEmployees, action.payload]
            return { ...state, listOfEmployees: listWithNewEmployee };
        // case 'MODIFIER_PRENOM':
        //     return { ...state, firstName: action.payload };
        // case 'MODIFIER_TOKEN':
        //     return { ...state, token: action.payload };
        default:
            return state;
    }
}

export const store = configureStore(
    {
        preloadedState: initialState,
        reducer
    }
)