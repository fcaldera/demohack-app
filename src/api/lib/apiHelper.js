import authHelper from './authHelper';

export default {

  /**
   * Sends GET request to the API
   *
   * @param url
   * @param filters
   * @param sorting
   * @param limit
   * @param skip
   * @param customHeaders
   * @param authentication
   * @param fullResponse
   * @return {*}
   */
  get: function (url, filters, sorting, limit, skip, customHeaders, authentication = true, fullResponse = false) {
    const headers = {};

    if (authentication) {
      headers.Authorization = `Bearer ${authHelper.getApiToken()}`;
    }

    headers['Content-Type'] = 'application/json';
    headers.Accept = 'application/json';

    if (filters && filters instanceof Object) {
      headers['X-Filters'] = JSON.stringify(filters);
    }

    if (sorting && sorting instanceof Object) {
      headers['X-Sorting'] = JSON.stringify(sorting);
    }

    if (limit) {
      headers['X-Limit'] = Number(limit);
    }

    if (skip) {
      headers['X-Skip'] = Number(skip);
    }

    if (customHeaders) {
      Object.keys(customHeaders).map(key => {
        headers[key] = customHeaders[key];
      });
    }

    const fetchData = {
      method: 'GET',
      headers: headers
      // mode: "no-cors"
    };

    return fetch(url, fetchData)
      .then(response => {
        if (fullResponse) {
          return response;
        }
        return response
          .json()
          .then(data => data);
      })
      .catch(err => err);
  },

  /**
   * Sends POST request to the API
   * @param url
   * @param body
   * @param limit
   * @param authentication
   * @param fullResponse
   */
  post: function (url, body, limit, authentication = true, fullResponse = false) {
    const headers = {};

    if (authentication) {
      headers.Authorization = `Bearer ${authHelper.getApiToken()}`;
    }

    headers['Content-Type'] = 'application/json';
    headers.Accept = 'application/json';

    if (limit) {
      headers['X-Limit'] = Number(limit);
    }

    const fetchData = {
      method: 'POST',
      headers: headers
      // mode: "no-cors"
    };

    if (body) {
      fetchData.body = JSON.stringify(body);
    }

    return fetch(url, fetchData)
      .then(response => {
        if (fullResponse) {
          return response;
        }
        return response
          .json()
          .then(data => data);
      })
      .catch(err => err);
  },

  /**
   * Sends POST request with files to the API
   * @param url
   * @param files
   * @param authentication
   * @param fullResponse
   */
  upload: function (url, files, authentication = true, fullResponse = false) {

    let headers = {};

    if (authentication) {
      headers["Authorization"] = 'Bearer ' + authHelper.getApiToken();
    }

    // headers['Content-Type'] = 'application/x-www-form-urlencoded';
    headers['Accept'] = 'application/json';

    let body = new FormData();
    console.log('files', files);
    // body.append("files", files);
    for (let i = 0; i < files.length; i++) {
      // let file = files.item(i);
      let file = files[i];
      body.append("files", file);
    }

    let fetchData = {
      method: "POST",
      headers: headers,
      body: body,
    };

    return fetch(url, fetchData)
      .then(function (response) {
        if (fullResponse) {
          return response;
        } else {
          return response
            .json()
            .then(function (data) {
              return data;
            });
        }
      })
      .catch(function (err) {
        return err;
      });
  },

  /**
   * Sends PUT request to the API
   * @param url
   * @param body
   * @param authentication
   * @param fullResponse
   */
  put: function (url, body, authentication = true, fullResponse = false) {
    const headers = {};

    if (authentication) {
      headers.Authorization = `Bearer ${authHelper.getApiToken()}`;
    }

    headers['Content-Type'] = 'application/json';
    headers.Accept = 'application/json';

    const fetchData = {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(body)
      // mode: "no-cors"
    };

    return fetch(url, fetchData)
      .then(response => {
        if (fullResponse) {
          return response;
        }
        return response
          .json()
          .then(data => data);
      })
      .catch(err => err);
  },

  /**
   * Sends PATCH request to the API
   * @param url
   * @param body
   * @param authentication
   * @param fullResponse
   */
  patch: function (url, body, authentication = true, fullResponse = false) {
    const headers = {};

    if (authentication) {
      headers.Authorization = `Bearer ${authHelper.getApiToken()}`;
    }

    headers['Content-Type'] = 'application/json';
    headers.Accept = 'application/json';

    const fetchData = {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify(body)
      // mode: "no-cors"
    };

    return fetch(url, fetchData)
      .then(response => {
        if (fullResponse) {
          return response;
        }
        return response
          .json()
          .then(data => data);
      })
      .catch(err => err);
  },

  /**
   * Sends DELETE request to the API
   * @param url
   * @param authentication
   * @param fullResponse
   */
  delete: function (url, authentication = true, fullResponse = false) {
    const headers = {};

    if (authentication) {
      headers.Authorization = `Bearer ${authHelper.getApiToken()}`;
    }

    headers['Content-Type'] = 'application/json';
    headers.Accept = 'application/json';

    const fetchData = {
      method: 'DELETE',
      headers: headers
      // mode: "no-cors"
    };

    return fetch(url, fetchData)
      .then(response => {
        if (fullResponse) {
          return response;
        }
        return response
          .json()
          .then(data => data);
      })
      .catch(err => err);
  }

};
