import React from 'react';

const options = { 
    min: {
        label: 'Minimum Value',
        type: 'number',
    },
    max: {
        label: 'Maximum Value',
        type: 'number',
    }
}

export { options };

const typeFloat = () => (<div>Float</div>);

export default typeFloat;