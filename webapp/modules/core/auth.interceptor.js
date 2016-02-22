const COOKIES = new WeakMap();
let key = {};

export default class AuthInterceptor {
  constructor($cookies) {
    COOKIES.set(key, $cookies);
  }

  request(config) {
    let xToken = COOKIES.get(key).get('x-token');

    if (xToken) {
      config.headers['X-TOKEN'] = xToken;
    }

    return config;
  }

  static authInterceptorFactory($cookies) {
    return new AuthInterceptor($cookies);
  }
}

AuthInterceptor.authInterceptorFactory.$inject = ['$cookies'];
