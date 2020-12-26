import React from 'react';

import './form-input.styles.scss';

const FormInput: React.FC<any> = ({ handleChange, label, ...otherProps }) => (
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