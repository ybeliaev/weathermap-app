import React, { useState, useRef } from 'react';



export const Input = ({ dispatch }) => {
    const [inputValue, setInputValue] = useState('');
    
    // ref для фокуса на input после добавления города
    const inputRef = useRef(null);

    const handleOnClick = () => {
        if (inputValue.length) {
          dispatch({
            type: 'ADD_CITY',
            payload: inputValue, 
          })
          setInputValue("");
          inputRef.current.focus();
        }
    }

    const handleOnChange = (event) => {
        dispatch({
            type: 'CHANGE_INPUT_VALUE',
            payload: event.target.value, 
          })
        setInputValue(event.target.value);
    }

    return (
        <div className="InputWrap">
            <input className="Input" onChange={handleOnChange} value={inputValue} ref={inputRef} />
            <button className="Button" onClick={handleOnClick}>+</button>
        </div>
    )
}