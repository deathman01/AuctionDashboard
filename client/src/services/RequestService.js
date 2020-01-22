//abhishek360

import axios from 'axios';
import jwt from 'jsonwebtoken';
import * as Constants from '../constants/action-constants'

export default class RequestService {
  constructor(route = '', domain = '') {
    let uri = process.env.REACT_APP_ADMIN_HOST || '';
    switch (domain) {
      case Constants.ADMIN:
        uri = process.env.REACT_APP_ADMIN_HOST || '';
        this.url = `${uri}/api/${route}`;
        break;

      default:
        uri = process.env.REACT_APP_ADMIN_HOST || '';
        this.url = `${uri}/api/${route}`;
    }

    axios.defaults.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }

  setToken = async(data) => {
    sessionStorage.setItem('xyz-access-token',data.token);
  }

  getToken = async() => {
    const token = await sessionStorage.getItem('xyz-access-token');
    const created = await sessionStorage.getItem('createdAt');
    const curr = Date();
    const expiry = 24*30*60*1000;
    if(curr-Date.parse(created)>expiry){
      console.log('session expired');
      await this.logout();
    }
    return token;
  }

  loggedIn = async() => {
    const token = await sessionStorage.getItem('xyz-access-token');
    if(token!==null){
      const created = await sessionStorage.getItem('createdAt');
      const curr = new Date();
      const expiry = 24*30*60*1000;
      //console.log('time to expire', curr-Date.parse(created));
      if(curr-Date.parse(created)>expiry){
        console.log('session expired');
        await this.logout();
        return false;
      }
      console.log('tokeeeennnnnnnnnnnnnnnn', token);
      return true;
    }
    return false;
  }

  logout = async () => {
    try {
      await sessionStorage.clear();
      return true;
    } catch (error) {
      return error.response;
    }
  }

  post = async (data, headers = axios.defaults.headers, id = '') => {
    if (await this.loggedIn()) {
      axios.defaults.headers['xyz-access-token'] = await this.getToken();
      try {
        const res = await axios({ method: 'POST',  url: `${this.url}${id}`, data, headers });
        return res.data;
      } catch (error) {
        return error.response.data;
      }
    }
    return {
      success: 'false',
      status: 'unauthorized',
      message: 'Token not found, Login and try again.',
    };
  };

  put = async (data, headers = axios.defaults.headers, id = '') => {
    if (await this.loggedIn()) {
      axios.defaults.headers['xyz-access-token'] = await this.getToken();
      try {
        const res = await axios({ method: 'PUT',  url: `${this.url}${id}`, data, headers });
        return res.data;
      } catch (error) {
        return error.response;
      }
    }
    else{
      try {
        const res = await axios({ method: 'PUT',  url: `${this.url}${id}`, data, headers });
        return res.data;
      } catch (error) {
        return error.response;
      }
    }
  };

  get = async (id = '') => {
    if (await this.loggedIn()) {
      axios.defaults.headers['xyz-access-token'] = await this.getToken();
      try {
        const res = await axios({ methods: 'GET', url: `${this.url}${id}` });
        return res.data;
      } catch (error) {
        return error.response.data;
      }
    }
    else{
      try {
        const res = await axios({ methods: 'GET', url: `${this.url}${id}` });
        return res.data;
      } catch (error) {
        return error.response.data;
      }
    }
  };

  auth = async(username, password) => {
    try {
      const res = await axios({ method: 'POST', url: `${this.url}/login`, data : { username, password } });
      await this.setToken(res.data);
      return res.data;
    } catch (error) {
      console.log('login erorrrrrrrr', error);
      return{
        success: false,
        ...error.response,
      }
    }
  }

  reg = async(user) => {
    try {
      const res = await axios({ method: 'POST', url: `${this.url}/signup`, data : user });
      return res.data;
    } catch (error) {
      return{
        success: false,
        ...error.response,
      }
    }
  }
}
