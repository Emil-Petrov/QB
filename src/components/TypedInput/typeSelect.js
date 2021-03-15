import React from 'react';

const options = {
    options: {
        label: 'Options',
        type: 'list',
    }
}

export { options };

const typeSelect = ({ value, onChange, options = [] }) => {
    return (
        <select defaultValue={null} selected={value} onChange={onChange}>
            <option value={null} hidden>Select Value</option>
            {options.map(opt => (<option key={opt.value} value={opt.value}>{opt.name}</option>))}
        </select>
    )
}

export default typeSelect;