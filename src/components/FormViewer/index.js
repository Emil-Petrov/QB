import React, { useContext } from 'react';

import { FormContext } from '../../contexts/FormContext';
import TypedInput from '../TypedInput';

const FormViewer = () => {
    const {
        state: { formFields },
        actions: { editField }
    } = useContext(FormContext);

    const handleChange = (uid) => ({ target: { value } }) => editField(uid)({ value })

    return (
        <div className="form-viewer">
            {formFields.map(field => (
                <div key={field.uid} className="input-field">
                    <TypedInput {...field} onChange={handleChange(field.uid)} />
                </div>
            ))}
        </div>
    )
}

export default FormViewer;