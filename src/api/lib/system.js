import apiHelper from './apiHelper';

export default function System(apiUrl) {
  this.apiUrl = apiUrl;

  this.health = function () {
    const url = `${this.apiUrl}/system/health`;
    return apiHelper.get(url, null, null, null, null, null, false);
  };

}
