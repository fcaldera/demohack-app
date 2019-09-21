import apiHelper from './apiHelper';

export default function Authentication(apiUrl) {
  this.apiUrl = apiUrl;

  this.login = function (attributes) {
    const url = `${this.apiUrl}/authentication`;
    const body = {
      "data": {
        "type": "user",
        "attributes": attributes
      }
    };
    return apiHelper.post(url, body, null, false);
  };

  this.logout = function () {
    const url = `${this.apiUrl}/authentication`;
    return apiHelper.delete(url);
  };
}
