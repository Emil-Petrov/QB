import React, { createContext, useReducer } from 'react';
import formReducer, { initialState, actions as formActions } from '../reducers/FormReducer';

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    const actions = {
        addField: (field) => {
            dispatch({
                type: formActions.ADD_FIELD,
                field,
            });
        },
        removeField: uid => {
            dispatch({
                type: formActions.DELETE_FIELD,
                uid,
            });
        },
        editField: (uid) => (field) => {
            dispatch({
                type: formActions.CHANGE_FIELD,
                uid,
                field,
            });
        },
    }

    return (
        <FormContext.Provider value={{ state, actions }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContextProvider;