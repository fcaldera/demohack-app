import React, {useEffect, useState} from 'react';
import {withRouter, Link} from 'react-router-dom';

function ActivationSuccess(props) {
    return (
        <div className={classes.root}>
            <div className={classes.paper}>
                <h3 style={{margin: 0}}>Nice to meet you!</h3>
                <h3 style={{marginBottom: 0}}>Please complete your registration by clicking on the link in the email I just sent you.</h3>
            </div>
        </div>
    );
}

export default (
  withRouter(
    ActivationSuccess
  )
);
