import React from 'react';
import Loader from '../../Loader';
import './styles.scss';
const button = ({ text, onClick, isPending, ...rest }) => (
    <button
        type="button"
        onClick={onClick}
        disabled={isPending}
        className="field-button"
        {...rest}
    >
        {isPending ? <Loader /> : text}
    </button>
);

export default button;