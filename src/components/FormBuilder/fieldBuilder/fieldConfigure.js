import React from 'react';

import TypedInput from '../../TypedInput';

const fieldConfig = ({ onChange, fields }) => {
    return (
        Object.keys(fields).map(option => {
            const {
                value,
                type,
                ...rest
            } = fields[option];

            return (
                <div key={option} className="field-config-option">
                    <TypedInput type={type} onChange={onChange(option)} value={value} {...rest} />
                </div>
            )
        })
    )

}

export default fieldConfig;