import React, { useState, useRef } from 'react';

import '../App.css';

const InputTag = ({setCitiesList }) => {
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null);

    const handleOnChange = (event) => {
      setInputValue(event.target.value);
    }
    const handleOnClick = () => {
        if(inputValue.length){
            setCitiesList((currentArray) => [...currentArray, inputValue]);
            setInputValue('');
            inputRef.current.focus();
        }
    }
    
    return (
    
        <input className="Input" onChange={handleOnChange} value={inputValue} ref={inputRef} />
        
    
)};

const Button = () => {
    return <button className="Button" onClick={handleOnClick}>+</button>
}

export const Input = () => {
    return (
      <div className="InputWrap">
        <InputTag />
        <Button />
      </div>
    );
}