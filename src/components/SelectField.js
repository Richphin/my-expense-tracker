import React from 'react'
import { ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';

function SelectField(props) {
    return (
        <div>
            <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select</ControlLabel>
                <FormControl componentClass="select" placeholder="select" name={props.name} value={props.value} onChange={props.onChange}>
                    <option value="select">select</option>
                    <option value="food">food</option>
                </FormControl>
            </FormGroup>
                
        </div>
    )
}

export default SelectField
