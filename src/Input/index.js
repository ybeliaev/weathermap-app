import React, { useState, useRef } from 'react';

import '../App.css';

const InputTag = ({handleOnChange, inputValue, inputRef}) => {   
    
    return (
      <input
        className="Input"
        onChange={handleOnChange}
        value={inputValue}
        ref={inputRef}
      />
    );};

const Button = ({handleOnClick}) => {
    return <button className="Button" onClick={handleOnClick}>+</button>
}

export const Input = ({setCitiesList }) => {
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null);

    const handleOnChange = (event) => {
      setInputValue(event.target.value);
    }
    const handleOnClick = () => {
      if (inputValue.length) {
        setCitiesList((currentArray) => [...currentArray, inputValue]);
        setInputValue("");
        inputRef.current.focus();
      }
    }
    return (
      <div className="InputWrap">
        <InputTag handleOnChange={handleOnChange} inputRef={inputRef} inputValue={inputValue}/>
        <Button handleOnClick={handleOnClick}/>
      </div>
    );
}