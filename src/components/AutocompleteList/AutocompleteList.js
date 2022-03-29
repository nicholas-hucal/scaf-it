import './AutocompleteList.scss';

const AutocompleteList = ({onClick, filteredSuggestions, activeSuggestionIndex}) => {
    return filteredSuggestions.length ? (
        <ul className="autocomplete-list">
            {filteredSuggestions.map((suggestion, index) => {
                let className;
                if (index === activeSuggestionIndex) {
                    className = "autocomplete-list__list-item--active";
                }
                return (
                    <li className={`autocomplete-list__list-item ${className}`} key={suggestion} onClick={onClick}>
                        {suggestion}
                    </li>
                );
            })}
        </ul>
    ) : (
        <div className="autocomplete-list__none">
            <em>No suggestions, you're on your own!</em>
        </div>
    );
};

export default AutocompleteList;