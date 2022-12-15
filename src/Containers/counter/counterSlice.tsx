import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CalcDisplayState {
    value: string;
}

const initialState: CalcDisplayState = {
    value: '',
}

export const CalcSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        DisplayChange: (state, action:PayloadAction<string>) => {
            state.value = state.value + action.payload;
        },
        Result: (state) => {
            state.value = eval(state.value).toString();
            if (eval(state.value) === Infinity || state.value.length > 20){
                state.value = '';
            }
        },
        ClearDisplay: (state) =>{
            state.value = '';
        },
        DeleteLastChar: (state) => {
            state.value = state.value.slice(0, -1);
        }
    },
})

export const counterReducer = CalcSlice.reducer;
export const {DisplayChange, Result, ClearDisplay,DeleteLastChar} = CalcSlice.actions;