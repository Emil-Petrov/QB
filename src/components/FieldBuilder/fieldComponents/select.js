import React from 'react';

const select = ({ label, options, defaultValue }) => (
    <div className="field-select">
        <label>
            {label && <span className="label">{label}</span>}
            <select defaultValue={defaultValue}>
                {options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
        </label>
    </div>
)

export default select;