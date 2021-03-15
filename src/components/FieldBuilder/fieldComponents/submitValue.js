import React, { useState, useRef, useEffect } from 'react';
import { Button, Text } from './';

const SubmitValue = ({ value, submitText, buttonText, onSubmit, focused }) => {
    const [newValue, changeValue] = useState(value || '');
    const inputRef = useRef(null);

    const handleChange = ({ target: { value } }) => {
        changeValue(value);
    }

    useEffect(() => {
        if (focused) {
            inputRef.current.focus();
        }
    }, [focused])

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
            <Text ref={inputRef} label={submitText} value={newValue} onChange={handleChange} onKeyPress={handleKeyPress} />
            <Button className="field-submit-value-button" text={buttonText} onClick={handleSubmit} />
        </div>
    )
}

export default SubmitValue;