import React from 'react';

const options = { 
    fromDate: {
        label: 'From',
        type: 'number',
    },
    toDate: {
        label: 'To',
        type: 'number',
    }
}

export { options };

const typeDate = () => (<div>Date</div>);

export default typeDate;