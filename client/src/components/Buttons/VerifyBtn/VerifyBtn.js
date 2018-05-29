import React, { Component } from 'react';
import ComboBtn from '../ComboBtn/ComboBtn';
import './VerifyBtn.css'

// button used to add validity or mark as inacurate
class VerifyBtn extends Component {
    render() {
    return(
        <div className="marginize">
            <ComboBtn cl1="btn btn-verify" cl2="btn btn-reject" side1="Verify" side2="Discredit" />
        </div>
        );
    }
}


export default VerifyBtn;