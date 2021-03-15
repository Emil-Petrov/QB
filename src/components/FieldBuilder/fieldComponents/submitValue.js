import React, { useState } from 'react';
import { Button, Text } from './';

const SubmitValue = ({ value, submitText, buttonText, onSubmit, focused }) => {
    const [newValue, changeValue] = useState(value || '');

    const handleChange = ({ target: { value } }) => {
        changeValue(value);
    }

    const handleSubmit = () => {
        onSubmit({ target: { value: newValue } });
        changeValue('');
    }

    const handleKeyPress = ({ key }) => {
        if (key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <div className="field-submit-value">
            <Text autoFocus={focused} label={submitText} value={newValue} onChange={handleChange} onKeyPress={handleKeyPress} />
            <Button className="field-submit-value-button" text={buttonText} onClick={handleSubmit} />
        </div>
    )
}

export default SubmitValue;