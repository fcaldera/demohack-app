import React, {useEffect, useCallBack} from 'react';
import {withRouter} from 'react-router-dom';
import {toast} from 'react-toastify';

// api
// import apiClient from '../../api'

// actions
import {activate} from '../../state/actions';
import {AppState} from "../../state";

function EmailActivation(props) {
    const {match} = props;
    const {params} = match;

    const [, dispatch] = AppState();
    const push = useCallBack((url) => props.history.push(url))

    // activate
    useEffect(() => {
      const { token = null } = params || {}
        if (token) {
            activate(dispatch, token)
                .then(response => {
                    if (response.data) {
                        toast('Activation success');
                        push('/dashboard')
                    } else {
                        toast(`Activation error (${(response.problems ? response.problems.join('; ') : (response.description || JSON.stringify(response)))})`);
                    }
                })
        }
    }, [params, dispatch, push]);

    return (
        <div>
          <div>
            <div>
              <i className="fas fa-robot"/>
            </div>
          </div>
          {params && params.token ? (
            <h2>Activating your account...</h2>
          ) : (
            <h2>Token missing... check your link</h2>
          )}
        </div>
    );
}

export default (
  withRouter(
    EmailActivation
  )
);
