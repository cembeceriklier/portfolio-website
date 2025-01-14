import { useEffect, useState } from 'react';
import { setCookie, getCookie, removeCookie } from '../utils/cookies';
import { setSessionStorage, getSessionStorage } from '../utils/sessionStorage';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(!getCookie('cookieConsent'));
  const userConsent = getCookie('cookieConsent') || getSessionStorage('cookieConsent');

  const handleAccept = () => {
    // setCookie('cookieConsent', 'accepted', { maxAge: 60 * 60 * 24 * 30 });
    setIsVisible(false);

  };

  const handleReject = () => {
    removeCookie('cookieConsent');
    // setSessionStorage('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  useEffect(() => {
    if (userConsent === 'rejected') {
      setIsVisible(true);
    }

  }, [userConsent]);

  if (!isVisible) return null;

  return (
    <div className="cookie_consent">
      <p className='cookie_text'>This site uses cookies to enhance your user experience. Do you accept?</p>
      <div className='button_container'>
        <button className='button accept' onClick={handleAccept}>Allow</button>
        <button className='button reject' onClick={handleReject}>Decline</button>
      </div>
    </div>
  );
};

export default CookieConsent;
