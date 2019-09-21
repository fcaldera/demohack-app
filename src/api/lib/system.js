import apiHelper from './apiHelper';

export default function System(apiUrl) {
    this.apiUrl = apiUrl;

    this.getHealth = function () {
        const url = `${this.apiUrl}/system/health`;
        return apiHelper
            .get(url, null, null, null, null, null, false)
            .then(response => response);
    };

    this.getInfo = function () {
        const url = `${this.apiUrl}/system/info`;
        return apiHelper
            .get(url)
            .then(response => response);
    };

}
