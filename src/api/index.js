import System from './lib/system';
import Authentication from './lib/authentication';
import User from './lib/user';

const apiVersion = '/v1.0';
let apiUrl = '';
if (process.env.API_URL) {
  apiUrl = process.env.API_URL + apiVersion;
} else if (process.env.REACT_APP_ENV) {
  switch (process.env.REACT_APP_ENV) {
    case 'development':
      apiUrl = 'http://localhost:1408' + apiVersion;
      break;
    case 'staging':
      apiUrl = 'http://localhost:1408' + apiVersion;
      break;
    case 'production':
    default:
      apiUrl = 'http://localhost:1408' + apiVersion;
      break;
  }
} else {
  apiUrl = 'http://localhost:1408' + apiVersion;
}

export default function apiClient() {
  if (this instanceof apiClient) {
    this.apiUrl = apiUrl;
    this.system = new System(apiUrl);
    this.authentication = new Authentication(apiUrl);
    this.user = new User(apiUrl);
  } else {
    return new apiClient(apiUrl);
  }
}
