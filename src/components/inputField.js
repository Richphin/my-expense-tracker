import React from 'react'
import { ControlLabel, FormControl, FormGroup,Glyphicon, HelpBlock } from 'react-bootstrap';


function InputField({ id, label, help, ...props }) {
    return (
        <div>
        <FormGroup controlId={props.id}>
            <ControlLabel>{props.lable}<span>  </span><Glyphicon glyph={props.glyph} /></ControlLabel>
            <FormControl {...props} className={props.className}  name={props.name} value={props.value} onChange={props.onChange}/>
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
        
        </div>
    )
}

export default InputField;
