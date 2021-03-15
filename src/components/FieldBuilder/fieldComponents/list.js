import React, { useState } from 'react';

import SubmitValue from './submitValue';

const List = ({ label, options, onChange }) => {
    const [selected, setSelected] = useState({});
    
    const triggerAction = (target, index) => () => {
        switch (target) {
            case 'edit':
                setSelected(index);
                break;
            case 'delete':
                handleDelete(index);
                break;
            default:
                throw new Error('Invalid action');
        }
    }

    const handleDelete = (index) => {
        const newOptions = [...options];
        newOptions.splice(index, 1);

        onChange({
            target: {
                value: {
                    newOptions,
                    deleted: options[index],
                }
            }
        });
    }

    const handleChange = ({ target: { value } }) => {
        const newOptions = [...options];

        const old = newOptions.splice(selected, 1, value);

        onChange({
            target: {
                value: { 
                    newOptions,
                    old,
                    new: value,
                }
            }
        });
        setSelected({});
    }

    return (
        <div className="field-list">
            {label && <span className="label">{label}</span>}
            <ul>
                {options.map((option, index) => {
                    return (
                        <li className="field-list-item" key={option}>
                            {
                                index === selected
                                    ? <SubmitValue focus buttonText='Save' value={option} onSubmit={handleChange} />
                                    : (
                                        <>
                                            {option}
                                            <div className="actions">
                                                <button className="action edit" onClick={triggerAction('edit', index)}>Edit</button>
                                                <button className="action delete" onClick={triggerAction('delete', index)}>Delete</button>
                                            </div>
                                        </>
                                    )
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List;