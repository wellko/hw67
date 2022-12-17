import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {ClearDisplay, DeleteLastChar, DisplayChange, Result, SymbolChange} from "./counterSlice";
import './Calc.css';

const Calc = () => {
	const dispatch = useDispatch();
	const counterValue = useSelector((state: RootState) => state.counter.value);
	const buttonDisable = useSelector((state: RootState) => state.counter.disable)
	return (
		<div className='calc'>
			<div className='display'>{(counterValue !== '') ? counterValue : '0'}</div>
			<button className='calcBtn' onClick={() => dispatch(DisplayChange('1'))}>1</button>
			<button className='calcBtn' onClick={() => dispatch(DisplayChange('2'))}>2</button>
			<button className='calcBtn' onClick={() => dispatch(DisplayChange('3'))}>3</button>
			<button className='calcBtn' onClick={() => dispatch(DeleteLastChar())}> DEL</button>
			<button className='calcBtn' onClick={() => dispatch(DisplayChange('4'))}>4</button>
			<button className='calcBtn' onClick={() => dispatch(DisplayChange('5'))}>5</button>
			<button className='calcBtn' onClick={() => dispatch(DisplayChange('6'))}>6</button>
			<button className='calcBtn' disabled={buttonDisable} onClick={() => dispatch(SymbolChange('-'))}>-</button>
			<button className='calcBtn' onClick={() => dispatch(DisplayChange('7'))}>7</button>
			<button className='calcBtn' onClick={() => dispatch(DisplayChange('8'))}>8</button>
			<button className='calcBtn' onClick={() => dispatch(DisplayChange('9'))}>9</button>
			<button className='calcBtn' disabled={buttonDisable} onClick={() => dispatch(SymbolChange('+'))}>+</button>
			<button className='calcBtn' onClick={() => dispatch(DisplayChange('0'))}>0</button>
			<button className='calcBtn' disabled={buttonDisable} onClick={() => dispatch(SymbolChange('/'))}>/</button>
			<button className='calcBtn' disabled={buttonDisable} onClick={() => dispatch(SymbolChange('*'))}>*</button>
			<button className='calcBtn' disabled={buttonDisable} onClick={() => dispatch(Result())}>=</button>
			<button className='calcBtn' onClick={() => dispatch(ClearDisplay())}>C</button>
		</div>
	);
};

export default Calc;