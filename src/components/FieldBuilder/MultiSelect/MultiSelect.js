import React, { useEffect, useState, useCallback } from 'react';
import { NotificationManager } from 'react-notifications';

import preserve from '../../../utils/preserveData';

import {
    Text,
    List,
    Select,
    Toggle,
    Button,
    SubmitValue,
} from '../fieldComponents';

const choiceLimit = 50;
const sortOptions = ['Text', 'Natural'];

const defaulState = {
    "label": "",
    "required": false,
    "choices": [],
    "default": "",
}

export default function MultiSelect({ data, onSubmit, id }) {
    const [state, setState] = useState(() => {
        const fetchedState = data.fetch();
        const storedState = preserve.get(`multi-select-field-${id}`);
        if (storedState?.version >= fetchedState?.version) {
            return storedState;
        }

        return fetchedState || defaulState;
    });
    const [isPending, setPending] = useState(false);
    const [isValid, setValid] = useState(true);
    const [sortBy, setOrder] = useState(sortOptions[1]);

    const {
        choices,
        default: defaultValue,
        label,
        required,
        // displayAlpha, //????
    } = state;

    const validate = useCallback(() => {
        const hasLabel = label?.trim();
        if (!hasLabel) {
            NotificationManager.warning('Label is required');
            setValid(false);

            return false;
        }

        setValid(true);
        return true;
    }, [label]);

    const sort = useCallback((arr) => {
        let sorted = [...arr];
        switch (sortBy) {
            case 'Natural': {
                sorted.sort((a, b) => a.localeCompare(b, navigator?.language, { numeric: true, sensitivity: 'base' }))
                break;
            }
            case 'Text': {
                sorted.sort();
                break;
            }
            default:
                break;
        }
        return sorted;
    }, [sortBy])



    const handleChange = (target) => ({ target: { value } }) => {
        let newValue;
        switch (target) {
            case 'choices':
                if (value.trim() === '') {
                    NotificationManager.warning(`Please enter a value!`);
                    return;
                }

                if (choices.length >= choiceLimit) {
                    NotificationManager.warning(`List is limited to ${choiceLimit} items!`);
                    return;
                }

                if (choices.indexOf(value) !== -1) {
                    NotificationManager.warning(`Item already exists!`);
                    return;
                }
                newValue = sort([...choices, value.trim()]);
                break;
            case 'list': {
                const newState = {
                    ...state,
                    choices: sort(value.newOptions),
                };

                if (defaultValue === value.deleted) {
                    newState['default'] = choices[0];
                }

                const oldVal = value.old;
                const newVal = value.new;

                const valueEmpty = newVal === '';
                if (valueEmpty) {
                    NotificationManager.warning(`Value can't be empty`);
                    return;
                }

                const valueExists = choices.indexOf(newVal) !== -1;
                if (valueExists) {
                    NotificationManager.warning('Value already exists');
                    return;
                }

                if (defaultValue === oldVal) {
                    newState['default'] = newVal;
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
        const valid = validate();

        if (!valid) {
            return;
        }

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

    const handleSortChange = ({ target: { value } }) => {
        setOrder(value);
    }

    const clearForm = () => {
        setState({ ...defaulState });
    }

    useEffect(() => {
        setState(s => ({
            ...s,
            choices: sort(s.choices),
        }))
    }, [sortBy, sort])

    useEffect(() => {
        validate()
    }, [label, validate])

    useEffect(() => {
        preserve.save(`multi-select-field-${state.id}`)(state);
    }, [state]);

    return (
        <div className="multi-select">
            <div className="select-header">
                <div className="heading">Multi Select</div>
            </div>
            <Text
                label="Label"
                isValid={isValid}
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
                limit={choiceLimit}
            />
            <Select
                label="Default"
                options={choices}
                value={defaultValue}
                onChange={handleChange('default')}
            />
            <Select
                label="Sort By"
                onChange={handleSortChange}
                value={sortBy}
                options={sortOptions}
            />
            <Toggle
                label="Required"
                toggled={required}
                onChange={handleChange('required')}
            />
            <div className="select-footer">
                <Button
                    text="Clear"
                    onClick={clearForm}
                />
                <Button
                    text="Submit"
                    onClick={handleSubmit}
                    isPending={isPending}
                />
            </div>
        </div>
    )
};
