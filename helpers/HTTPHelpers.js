import {store} from '../redux/index';

const HTTPHelper = {
  async get(url, data, options = {}) {
    return await this.sendRequest(url, data, 'GET', options);
  },
  async post(url, data, options = {}) {
    return await this.sendRequest(url, data, 'POST', options);
  },
  async put(url, data, options = {}) {
    return await this.sendRequest(url, data, 'PUT', options);
  },
  async patch(url, data, options = {}) {
    return await this.sendRequest(url, data, 'PATCH', options);
  },
  async delete(url, data, options = {}) {
    return await this.sendRequest(url, data, 'DELETE', options);
  },
  async sendRequest(url, data, method = 'GET', options = {}) {
    const settings = store.getState().settings;

    let headers = {
      'Content-Type': 'application/json',
      LanguageCode: settings.language,
    };

    if (options && options.headers) {
      Object.keys(options.headers).forEach(
        key => (headers[key] = options.headers[key]),
      );
    }

    let urlLower = url.toLowerCase();
    if (!urlLower.startsWith('http://') && !urlLower.startsWith('https://')) {
      let apiServer = settings.apiServers.find(server => server.default);
      if (apiServer) {
        url = apiServer.url + url;
      }
    }
    if (options.type === 'fromData') {
      headers['Content-Type'] = 'multipart/form-data';
    }

    let auth = store.getState().auth;
    if (auth && auth.accessToken) {
      headers.Authorization = 'Bearer ' + auth.accessToken;
      // console.log('token', headers.Authorization);
    }

    if (data && (method || 'GET') === 'GET') {
      const params = this.convertObjectToQuery(data);
      if (params.length > 0) {
        if (url.indexOf('?') >= 0) {
          url += '&';
        } else {
          url += '?';
        }

        url += params;

        data = null;
      }
    }

    console.log(`Send ${method} request to ${url} with data: `, data);
    try {
      const response = await fetch(url, {
        method: method || 'GET',
        headers: headers,
        body: data ? JSON.stringify(data) : null,
      });

      if (response.ok && response.status === 200) {
        if (response.headers.map['content-type'].indexOf('json') !== -1) {
          return await response.json();
        }

        return await response.text();
      }
    } catch (e) {
      console.error('Send request ERROR: ', e);
    }

    return null;
  },
  convertObjectToQuery(obj) {
    const queries = [];
    Object.keys(
      key => (queries[key] = `${key}=${encodeURIComponent(obj[key])}`),
    );
    if (queries.length === 0) {
      return '';
    }

    return queries.join('&');
  },
};

export default HTTPHelper;
