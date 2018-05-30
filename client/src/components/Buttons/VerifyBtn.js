import React, { Component } from 'react';
import ComboBtn from './ComboBtn';
import './style-btn.css';

// button used to add validity or mark as inacurate
// these buttons have state because they will be disabled if user has clicked before..
class VerifyBtn extends Component {
    render() {
    return(
        <div id="VerifyBtn" className="marginize">
            <ComboBtn cl1="btn btn-verify" cl2="btn btn-reject" side1="Verify" side2="Discredit" />
        </div>
        );
    }
}

export default VerifyBtn;