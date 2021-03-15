import React from 'react';
import { typeList } from '../../TypedInput';

const typeSelector = ({ onSelect }) => {
    const handleClick = (type) => (e) => {
        onSelect(type);
        e.preventDefault();
        e.stopPropagation();
    }

    const capitalizeTitle = (title) => title[0].toUpperCase() + title.substr(1);

    const allTypes = Object.keys(typeList).map(type => (
        <div className="type-selector" key={type} onClick={handleClick(type)}>
            <div className="type-preview">
                {capitalizeTitle(type)}
                {/* <TypedInput type={type} label={capitalizeTitle(type)} /> */}
            </div>
        </div>
    ));

    return (
        <div className="type-list">
            {allTypes}
        </div>
    )
}

export default typeSelector;