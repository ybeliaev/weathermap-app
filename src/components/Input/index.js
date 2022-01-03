import React, { useState, useRef } from 'react';



export const Input = ({ setCitiesList }) => {
    const [inputValue, setInputValue] = useState('');
    
    // ref для фокуса на input после добавления города
    const inputRef = useRef(null);

    const handleOnClick = () => {
        if (inputValue.length) {
          setCitiesList((currentArray) => [...currentArray, inputValue]);
          setInputValue("");
          inputRef.current.focus();
        }
    }

    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className="InputWrap">
            <input className="Input" onChange={handleOnChange} value={inputValue} ref={inputRef} />
            <button className="Button" onClick={handleOnClick}>+</button>
        </div>
    )
}