import React, { useState, useContext, useEffect } from 'react';
import './styles.scss';

import { FormContext } from '../../contexts/FormContext';
import { typeList } from '../TypedInput';

import Modal from '../Modal';

import FieldBuilder from './fieldBuilder';

const FormBuilder = () => {
    const { actions: { addField } } = useContext(FormContext);

    const [showModal, toggleModal] = useState(false);
    const [field, setField] = useState({});
    const [type, setType] = useState('');

    useEffect(() => {
        if (type === '') {
            setField([])
        } else {
            setField({
                label: {
                    label: 'Label',
                    type: 'text',
                    value: '',
                },
                ...typeList[type],
            });
        }
    }, [type]);

    const closeModal = () => {
        toggleModal(false);
        setType('');
    }

    const handleSubmit = () => {
        const simpleFieldObject = Object.keys(field).reduce((acc, prop) => {
            return {
                ...acc,
                [prop]: field[prop].value,
            };
        }, { type })

        addField(simpleFieldObject);
        closeModal();
    }

    return (
        <div className="form-builder">
            <h2>Form Builder</h2>
            <button onClick={() => toggleModal(true)}>Add Component</button>
            {showModal &&
                <Modal
                    header={type
                        ? (<h3>Setup Field - <span onClick={() => setType('')} className="modal-field-type">{type}</span></h3>)
                        : (<h3>Select Type</h3>)
                    }
                    children={(
                        <FieldBuilder
                            field={field}
                            setField={setField}
                            type={type}
                            setType={setType}
                        />
                    )}
                    footer={(
                        <>
                            {type && <button className="add-field" onClick={handleSubmit}>Add</button>}
                            <button onClick={closeModal}>Cancel</button>
                        </>
                    )}
                />
            }
        </div>
    )
}


export default FormBuilder;