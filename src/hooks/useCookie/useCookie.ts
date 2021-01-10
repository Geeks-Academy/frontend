const useCookie = () => {
  const getCookie = (name: string) => {
    let cookieValue = null;
    if (document.cookie !== '') {
      const cookies = document.cookie.split(/; */);
      cookies.forEach((cookie) => {
        const cookieName = cookie.split('=')[0];
        const cookieVal = cookie.split('=')[1];
        if (cookieName === decodeURIComponent(name)) {
          cookieValue = decodeURIComponent(cookieVal);
        }
      });
    }
    return cookieValue;
  };

  const setCookie = (
    name: string,
    val: string,
    date?: Date,
    path?: string,
    domain?: string,
    secure?: string
  ) => {
    if (navigator.cookieEnabled) {
      const cookieName = encodeURIComponent(name);
      const cookieVal = encodeURIComponent(val);
      let cookieText = `${cookieName}=${cookieVal}`;

      if (typeof date !== 'undefined') {
        cookieText += `; expires=${date.toUTCString()}`;
      }

      if (path) {
        cookieText += `; path=${path}`;
      }

      if (domain) {
        cookieText += `; domain=${domain}`;
      }

      if (secure) {
        cookieText += '; secure';
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
