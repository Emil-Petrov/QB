import React from 'react';

const options = { 
    yesText: {
        label: 'Yes Text',
        type: 'text',
        value: 'Yes',
    },
    noText: {
        label: 'No Text',
        type: 'text',
        value: 'No',
    }
}

export { options };

const typeBoolean = () => (<div>Boolean</div>);

export default typeBoolean;