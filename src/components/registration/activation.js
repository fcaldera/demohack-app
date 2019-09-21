import React, {useEffect, useState} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {toast} from 'react-toastify';

// api
import apiClient from '../../api'

// actions
import {activate} from '../../state/actions';
import {AppState} from "../../state";

function Activation(props) {
    const {match} = props;
    const {params} = match;

    const [state, dispatch] = AppState();

    // activate
    useEffect(() => {
        if (params && params.token) {
            activate(dispatch, params.token)
                .then(response => {
                    if (response.data) {
                        toast('Activation success');
                        props.history.push('/dashboard')
                    } else {
                        toast(`Activation error (${(response.problems && response.problems.join('; ') || response.description || JSON.stringify(response))})`);
                    }
                })
        }
    }, [params.token]);

    return (
        <div className={classes.root}>
            <div className={classes.paper}>
                <div className={classes.title}>
                    <div className={classes.avatarContainer}>
                        <div className={classes.avatar}>
                            <i className="fas fa-robot"/>
                        </div>
                    </div>
                    {params && params.token ? (
                        <h2>Activating your account...</h2>
                    ) : (
                        <h2>Token missing... check your link</h2>
                    )}
                </div>

            </div>
        </div>
    );
}

export default (
  withRouter(
    Activation
  )
);
