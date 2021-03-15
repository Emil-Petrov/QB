import React from 'react';
import './TypedInput.scss';

import Text, { options as textOptions } from './typeText';
import Number, { options as numberOptions } from './typeNumber';
import Float, { options as floatOptions } from './typeFloat';
import Boolean, { options as booleanOptions } from './typeBoolean';
import Date, { options as dateOptions } from './typeDate';
import DateTime, { options as dateTimeOptions } from './typeDateTime';
import List, { options as listOptions } from './typeList';
import ListComplex, { options as listComplexOptions } from './typeListComplex';
import Select, { options as selectOptions } from './typeSelect';

export const typeList = {
    'text': textOptions,
    'number': numberOptions,
    'decimal': floatOptions,
    'boolean': booleanOptions,
    'date': dateOptions,
    'date-time': dateTimeOptions,
    'list': listOptions,
    'list-complex': listComplexOptions,
    'select': selectOptions,
    'multi-select': {},
};

const TypedInput = ({ type, ...rest }) => {
    let content;

    switch (type) {
        case 'text': {
            content = <Text {...rest} />
            break;
        }
        case 'number': {
            content = <Number {...rest} />
            break;
        }
        case 'decimal': {
            content = <Float {...rest} />
            break;
        }
        case 'boolean': {
            content = <Boolean {...rest} />
            break;
        }
        case 'date': {
            content = <Date {...rest} />
            break;
        }
        case 'date-time': {
            content = <DateTime {...rest} />
            break;
        }
        case 'list': {
            content = <List {...rest} />
            break;
        }
        case 'list-complex': {
            content = <ListComplex {...rest} />
            break;
        }
        case 'select': {
            content = <Select {...rest} />
            break;
        }
        default:
            content = <div>Invalid Type</div>
    }

    return (
        <div className="typed-input">
            <div className="type-input-label">{rest.label}</div>
            <div className="typed-input-container">{content}</div>
        </div>
    )
}

export default TypedInput;