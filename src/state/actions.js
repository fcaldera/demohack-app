import apiClient from '../api'
import AuthHelper from '../api/lib/authHelper';
import {toast} from 'react-toastify';

export const getHealth = (dispatch) => {
    return apiClient()
        .system
        .health()
        .then((response) => {
            dispatch({type: 'setHealth', payload: response});
        })
        .catch((err) => {
            toast.error(`Error loading system health (${err})`);
        });
};

export const getMe = (dispatch) => {
    return apiClient()
        .user
        .me()
        .then((response) => {
            dispatch({type: 'setMe', payload: response.data});
            return response;
        })
        .catch((err) => {
            toast.error(`Error loading system health (${err})`);
        });
};

export const login = (dispatch, email, password, captcha) => {
    const attributes = {
        email: email,
        password: password
    };
    return apiClient()
        .authentication
        .login(attributes)
        .then(response => {
            if (response.data && response.data.attributes) {
                const {token, userId, validAfter, validBefore} = response.data.attributes;
                const payload = {
                    isLoggedIn: true,
                    apiToken: token,
                    userId,
                    validAfter,
                    validBefore
                };
                dispatch({type: 'setAuthentication', payload});
                AuthHelper.setCredentials(token, userId, validAfter, validBefore)
            }
            return response;
        })
        .catch(err => {
            toast('Login error', err);
        });
};

export const activate = (dispatch, token) => {
    return apiClient()
        .user
        .activate(token)
        .then(response => {
            if (response.data && response.data.attributes) {
                const {token, userId, validAfter, validBefore} = response.data.attributes;
                const payload = {
                    isLoggedIn: true,
                    apiToken: token,
                    userId,
                    validAfter,
                    validBefore
                };
                dispatch({type: 'setAuthentication', payload});
                AuthHelper.setCredentials(token, userId, validAfter, validBefore)
            }
            return response;
        })
        .catch(err => {
            toast('Login error', err);
        });
};

export const logout = (dispatch) => {
    AuthHelper.unsetCredentials();
    return apiClient()
        .authentication
        .logout()
        .then(() => {
            toast('Logout success');
            dispatch({type: 'setAuthentication', payload: null});
        })
        .catch(err => {
            toast('Logout error', err);
        });
};
