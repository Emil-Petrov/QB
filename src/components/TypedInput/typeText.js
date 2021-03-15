import React, { useRef, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
export const options = {
    min: {
        label: 'Minimum Length',
        type: 'number',
    },
    max: {
        label: 'Maximum Length',
        type: 'number',
    }
}

const TypeText = ({ value = '', onChange, min, max, label, ...rest }) => {
    const ref = useRef(null);

    const handleChange = (e) => {
        if (max && value.length >= max) {
            const truncated = e.target.value.substr(0, max);
            onChange({ target: { value: truncated } });
        } else {
            onChange(e);
        }
    }

    useEffect(() => {
        if (value < min) {
            ReactTooltip.show(ref.current);
        } else {
            ReactTooltip.hide(ref.current);
        }
    }, [value, min])

    return (
        <div className="type-text">
            <input
                ref={ref}
                data-tip={`Value must be ${min} characters long`}
                data-for="warning"
                type="text"
                placeholder={label || "Text"}
                value={value}
                onChange={handleChange}
                {...rest}
            />
            <ReactTooltip disable={value > min} event="" type="warning" id="warning" />
        </div>
    )
};

export default TypeText;