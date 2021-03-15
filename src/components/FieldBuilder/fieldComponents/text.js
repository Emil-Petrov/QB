import React from 'react';

const text = ({ label, value, onChange, ...rest }) => (
    <div className="field-text">
        <label>
            {label && <span className="label">{label}</span>}
            <input placeholder={label} value={value} onChange={onChange} {...rest} />
        </label>
    </div>
)

export default text;