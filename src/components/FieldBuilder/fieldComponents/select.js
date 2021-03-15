import React from 'react';

const select = ({ label, options, value, onChange }) => (
    <div className="field-select">
        <label>
            {label && <span className="label">{label}</span>}
            <select value={value} onChange={onChange}>
                {options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
        </label>
    </div>
)

export default select;