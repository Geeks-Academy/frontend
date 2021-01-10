import { IOptions } from './useCookie.model';

const useCookie = () => {
  const getCookie = (name: string) => {
    let cookieValue = null;
    if (document.cookie !== '') {
      const cookies = document.cookie.split(/; */);
      cookies.forEach((cookie) => {
        const [cookieName, cookieVal] = cookie.split('=');

        if (cookieName === decodeURIComponent(name)) {
          cookieValue = decodeURIComponent(cookieVal);
        }
      });
    }
    return cookieValue;
  };

  const setCookie = (name: string, val: string, options?: IOptions) => {
    if (navigator.cookieEnabled) {
      const cookieName = encodeURIComponent(name);
      const cookieVal = encodeURIComponent(val);

      let cookieText = `${cookieName}=${cookieVal}`;

      if (options) {
        const { path, date, domain, secure } = options;

        date && (cookieText += `; expires=${date.toUTCString()}`);
        path && (cookieText += `; path=${path}`);
        domain && (cookieText += `; domain=${domain}`);
        secure && (cookieText += '; secure');
      }

      document.cookie = cookieText;
    }
  };

  const removeCookie = (name: string) => {
    const cookieName = encodeURIComponent(name);
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  };

  return { getCookie, setCookie, removeCookie };
};

export default useCookie;
