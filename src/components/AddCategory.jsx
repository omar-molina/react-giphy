import React from 'react'
import { useState } from 'react'

export const AddCategory = ({ onCategory }) => {
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        //setCategories(categories => [inputValue, ...categories])
        onCategory(inputValue.trim());
        setInputValue('');
    }
    const [inputValue, setInputValue] = useState('')
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='Search...'
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}
