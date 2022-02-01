import React, {useState, useRef, useContext} from 'react';
import {GlobalContext} from "../../App";


export const Input = () => {
    // const [inputValue, setInputValue] = useState('');
    const {state: {inputValue, editingCity}, dispatch} = useContext(GlobalContext)

    // ref для фокуса на input после добавления города
    const inputRef = useRef(null);

    const handleOnClick = () => {
        if (inputValue.length) {
            dispatch({
                type: 'ADD_CITY',
                payload: inputValue,
            })
            dispatch({
                type: 'RESET_INPUT_VALUE',
                payload: ''
            })
            inputRef.current.focus();
        }
    }

    const handleOnChange = (event) => {
        dispatch({
            type: 'CHANGE_INPUT_VALUE',
            payload: event.target.value,
        })

    }
    const handleDone = () => {
        if (inputValue.length) {
            dispatch({
                type: 'EDIT_CITY_DONE',
                payload: inputValue
            })
            dispatch({
                type: 'RESET_INPUT_VALUE',
            })
            inputRef.current.focus()
        }
    }

    return (
        <div className="InputWrap">
            <input className="Input" onChange={handleOnChange} value={inputValue} ref={inputRef}/>
            <button className="Button" onClick={handleOnClick}>+</button>
        </div>
    )
}