import React, { Suspense } from 'react';
import './styles.scss';
import FieldApi from '../../../api/FieldApi';
import Loader from '../../Loader';

import MultiSelect from './MultiSelect';

const {
    getField,
    saveField
} = FieldApi;

const wrapper = ({ id }) => (
    <Suspense fallback={<Loader />}>
        <div className="field-builder-container">
            <MultiSelect data={getField(id)} onSubmit={saveField}/>
        </div>
    </Suspense>
);

export default wrapper;