import React from 'react';
import {withRouter} from 'react-router-dom';

function EmailSuccess(props) {
    return (
      <div>
        <h3 style={{margin: 0}}>Nice to meet you!</h3>
        <h3 style={{marginBottom: 0}}>Please complete your registration by clicking on the link in the email I just sent you.</h3>
      </div>
    );
}

export default (
  withRouter(
    EmailSuccess
  )
);
