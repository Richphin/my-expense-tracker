import React from 'react'
import { ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';

function ComentField() {
    return (
        <div>
            <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Textarea</ControlLabel>
                <FormControl componentClass="textarea" placeholder="textarea" />
            </FormGroup>
        </div>
    )
}

export default ComentField
