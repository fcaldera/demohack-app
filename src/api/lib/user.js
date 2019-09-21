import apiHelper from './apiHelper';

export default function User(apiUrl) {
  this.apiUrl = apiUrl;

  this.create = function (attributes) {
    const url = `${this.apiUrl}/user`;
    const body = {
      data: {
        type: "user",
        attributes: {
          email: attributes.email,
          firstName: attributes.firstName,
          lastName: attributes.lastName,
          password: attributes.password,
          roles: ['user'],
        },
      },
      captchaResponse: attributes.captchaResponse
    };
    return apiHelper.post(url, body);
  };

  this.activate = function (token) {
    const url = `${this.apiUrl}/user/activation/${token}`;
    return apiHelper.post(url);
  };

  this.recoverPassword = function (data) {
    const url = `${this.apiUrl}/user/password/token`;
    return apiHelper.post(url, data, null, false, true);
  };

  this.resetPassword = function (data) {
    const url = `${this.apiUrl}/user/password/reset`;
    return apiHelper.post(url, data, null, false, true);
  };

  this.me = function () {
    const url = `${this.apiUrl}/user/me`;
    return apiHelper.get(url);
  };

  this.update = function (data) {
    const url = `${this.apiUrl}/user/me`;
    return apiHelper.patch(url, data);
  };

  this.delete = function () {
    const url = `${this.apiUrl}/user/me`;
    return apiHelper.delete(url);
  };

}
