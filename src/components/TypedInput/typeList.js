import React from 'react';
import TypedInput from '.';

const options = { 
    itemType: {
        label: 'List Type',
        type: 'select',
        options: [{
            name: 'Text',
            value: 'text',
        }, {
            name: 'Numbers',
            value: 'number',
        }, {
            name: 'Decimal Numbers',
            value: 'float',
        }]
    },
}

export { options };

const typeList = () => (
    <div className="type-list">
        <div>List Content</div>
        <div className="list-add-content">
            <TypedInput  />
        </div>

    </div>
);

export default typeList;