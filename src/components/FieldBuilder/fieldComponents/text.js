import React from 'react';
import cn from 'classnames';

const text = ({ label, value, onChange, isValid, autoFocus, ...rest }) => (
    <div className="field-text">
        <label>
            {label && <span className="label">{label}</span>}
            <input
                className={cn(rest.className, {
                    'invalid': isValid === false,
                })}
                placeholder={label}
                value={value}
                onChange={onChange}
                autoFocus={autoFocus}
                {...rest}
            />
        </label>
    </div>
)

export default text;