import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CalcDisplayState {
	value: string;
	disable: boolean;
}

const initialState: CalcDisplayState = {
	value: '',
	disable: true,
}

export const CalcSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		DisplayChange: (state, action: PayloadAction<string>) => {
			if (action.payload !== '0') {
				state.value = state.value + action.payload;
				state.disable = false;
			} else {
				const checkerDev = state.value.split('/');
				const checkerSumm = state.value.split('+');
				const checkerMinus = state.value.split('-');
				const checkerMult = state.value.split('*')
				if (checkerDev[checkerDev.length - 1] !== '' &&
					checkerSumm[checkerSumm.length - 1] !== '' &&
					checkerMinus[checkerMinus.length - 1] !== '' &&
					checkerMult[checkerMult.length - 1] !== '') {
					state.value = state.value + action.payload;
					state.disable = false;
				}
			}
		},

		SymbolChange: (state, action: PayloadAction<string>) => {
			state.value = state.value + action.payload;
			state.disable = true;
		},

		Result: (state) => {
			state.value = eval(state.value).toString();
			console.log(parseInt(state.value))
			if (/[a-zA-Z]/.test(state.value)) {
				state.value = '';
				state.disable = true;
			}
		},

		ClearDisplay: (state) => {
			state.value = '';
			state.disable = true;
		},

		DeleteLastChar: (state) => {
			state.value = state.value.slice(0, -1);
			if (state.value.length >= 0) {
				const lastChar = state.value[(state.value.length - 1)]
				state.disable = !(/[0-9]/.test(lastChar));
			}
		}
	},
})

export const counterReducer = CalcSlice.reducer;
export const {DisplayChange, Result, ClearDisplay, DeleteLastChar, SymbolChange} = CalcSlice.actions;