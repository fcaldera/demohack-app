import React, {useEffect, useState} from 'react';
import {withRouter, Link} from 'react-router-dom';

// material-ui
import {withStyles, useTheme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// styles
const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette.primary.main
    },
    paper: {
        maxWidth: 480,
        background: 'white',
        borderRadius: 5,
        padding: theme.spacing(4),
        margin: theme.spacing(2)
    },
});

function RegistrationSuccess(props) {
    const {classes} = props;
    const theme = useTheme();

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
    withStyles(styles)(
        withRouter(
            RegistrationSuccess
        )
    )
);
