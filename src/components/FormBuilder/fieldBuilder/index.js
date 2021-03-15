import React from 'react';
import './formBuilder.scss';

import TypeSelector from './typeSelector';
import FieldConfigure from './fieldConfigure';

const FieldBuilder = ({ field, setField, type, setType }) => {
    const changeHandler = (propName) => ({ target: { value } }) => {
        setField({
            ...field,
            [propName]: {
                ...field[propName],
                value,
            },
        })
    }

    if (type === '') {
        return (
            <div className="field-type-selector">
                <TypeSelector onSelect={setType} />
            </div>
        )
    }

    return (
        <div className="field-setup">
            <FieldConfigure onChange={changeHandler} fields={field} />
        </div>
    )
}

export default FieldBuilder;