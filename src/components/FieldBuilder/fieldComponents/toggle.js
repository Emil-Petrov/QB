import React from 'react';

const toggle = ({ label, toggled }) => (
    <div className="field-toggle">
        <label>
            {label && <span className="label">{label}</span>}
            <input
                name={label}
                type="checkbox"
                defaultChecked={toggled}
            />
        </label>
    </div>
)

export default toggle;