import React, { useState } from 'react';
import './Autocomplete.scss';
import AutocompleteList from '../AutocompleteList/AutocompleteList';

const Autocomplete = ({ suggestions, changeType, value }) => {

    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState(value);

    const formatText = (value) => {
        return value.replace(/[^A-Z0-9]+/ig, "").toLowerCase();
    }

    const onChange = (e) => {
        const userInput = e.target.value;

        const unLinked = suggestions.filter(suggestion => {
            return suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        });

        setInput(formatText(e.target.value));
        changeType(formatText(e.target.value));
        setFilteredSuggestions(unLinked);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
    };

    const onClick = (e) => {
        setFilteredSuggestions([]);
        setInput(formatText(e.target.innerText));
        changeType(formatText(e.target.innerText));
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            setInput(filteredSuggestions[activeSuggestionIndex]);
            changeType(filteredSuggestions[activeSuggestionIndex]);
            setActiveSuggestionIndex(0);
            setShowSuggestions(false);
        } else if (e.keyCode === 38) {
            if (activeSuggestionIndex === 0) {
                return;
            }
            setActiveSuggestionIndex(activeSuggestionIndex - 1);
        }
        else if (e.keyCode === 40) {
            if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
                return;
            }
            setActiveSuggestionIndex(activeSuggestionIndex + 1);
        }
    };

    return (
        <>
            <label className='autocomplete'>
                element type
                <input
                    className='autocomplete__field'
                    type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={input}
                />
            </label>
            {showSuggestions && input &&
                <AutocompleteList
                    onClick={onClick}
                    filteredSuggestions={filteredSuggestions}
                    activeSuggestionIndex={activeSuggestionIndex}
                />
            }
        </>
    )
}

export default Autocomplete