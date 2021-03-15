import React from 'react';

const options = {
    min: {
        label: 'Min Value',
        type: 'number',
    },
    max: {
        label: 'Max Value',
        type: 'number',
    }
}

export { options };

const typeNumber = ({ value = '', onChange, min, max, label, ...rest }) => {
    const handleChange = (e) => {
        const eventObj = { ...e };
        const { target: { value: eventvalue } } = eventObj;

        if (min && +eventvalue < min) {
            eventObj.target.value = min;
        } else if (max && +eventvalue > max) {
            eventObj.target.value = max;
        } else {
            eventObj.target.value = parseInt(eventvalue);
        }

        onChange(eventObj);
    }

    return (
        <div className="type-number">
            <input
                type="number"
                placeholder={label}
                min={min}
                max={max}
                value={value}
                pattern="\d*"
                onChange={handleChange}
                {...rest}
            />
        </div>
    )
};

export default typeNumber;