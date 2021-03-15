import React, { useState } from 'react';
import { NotificationManager } from 'react-notifications';

import {
    Text,
    List,
    Select,
    Toggle,
    Button,
    SubmitValue,
} from '../fieldComponents';

export default function MultiSelect({ data, onSubmit }) {
    const [state, setState] = useState(data.fetch());
    const [isPending, setPending] = useState(false);

    const {
        choices,
        default: defaultValue,
        label,
        required,
        // displayAlpha, //????
    } = state;

    const validate = () => {
        let isValid = true;

        const hasLabel = label ?? ''
        if (!hasLabel) {
            NotificationManager.warning('Label is required');
            isValid = false;
        }
        
    }

    const handleChange = (target) => ({ target: { value } }) => {
        console.log(value);
        let newValue;
        switch (target) {
            case 'choices':
                if (value === '' || choices.indexOf(value) !== -1) {
                    NotificationManager.warning(`Item already exists!`)
                    return;
                }
                newValue = [...choices, value];
                break;
            case 'list': {
                console.log(value);
                const newState = { 
                    ...state, 
                    choices: value.newOptions,
                };

                if (defaultValue === value.deleted) {
                    newState['default'] = choices[0];
                }

                if (defaultValue === value.old) {
                    newState['default'] = value.new;
                }

                setState(newState);

                return;
            }
            default:
                newValue = value;
        }

        setState({
            ...state,
            [target]: newValue,
        });
    }

    const handleSubmit = () => {
        setPending(true);
        onSubmit(state).then(
            r => {
                console.log(r);
                setPending(false);
            },
            e => {
                console.log(e);
                setPending(false);
            }
        );
    }

    return (
        <div className="multi-select">
            <Text
                label="Label"
                value={label}
                onChange={handleChange('label')}
            />
            <SubmitValue
                submitText="Add Choice"
                buttonText="Add"
                onSubmit={handleChange('choices')}
            />
            <List
                label="Choices"
                options={choices}
                onChange={handleChange('list')}
            />
            <Select
                label="Sort By"
                options={['Text', 'Length']}
            />
            <Select
                label="Default"
                options={choices}
                defaultValue={defaultValue}
                onChange={handleChange('default')}
            />
            <Toggle
                label="Required"
                toggled={required}
                onChange={handleChange('required')}
            />
            <div className="select-footer">
                <Button
                    text="Submit"
                    onClick={handleSubmit}
                    isPending={isPending}
                />
                <Button
                    text="Cancel"
                    isPending={true}
                />
            </div>
        </div>
    )
};
