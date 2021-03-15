import newGUID from 'react-uuid';

export const initialState = {
    formFields: [],
}


export const actions = {
    ADD_FIELD: 'ADD_FIELD',
    DELETE_FIELD: 'DELETE_FIELD',
    CHANGE_FIELD: 'CHANGE_FIELD',
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actions.ADD_FIELD: {
            const { field } = action;

            const newState = {
                ...state,
                formFields: [...state.formFields, {
                    uid: newGUID(),
                    ...field,
                }],
            };

            return newState;
        }
        case actions.CHANGE_FIELD: {
            const { uid, field } = action;

            const newState = { ...state };

            const {
                formFields
            } = newState;

            const oldField = formFields.find(ff => ff.uid === uid);
            const fieldIndex = formFields.indexOf(oldField);

            formFields[fieldIndex] = {
                ...oldField,
                ...field,
            };

            return newState;
        }
        case actions.DELETE_FIELD: {
            const { uid } = action;

            const newState = [...state];

            const fieldIndex = newState.formFields.indexOf(ff => ff.uid === uid);
            newState.formFields.splice(fieldIndex, 1);

            return newState;
        }
        default:
            return state;
    }
}

export default reducer;