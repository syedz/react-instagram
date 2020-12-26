import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ Function: handleChange, string: label, ...otherProps }: any) => (
    <div className="group">
        <input 
            type="text" 
            className="form-input"
            onChange={handleChange}
            {...otherProps}    
        />
    </div>
);

export default FormInput;