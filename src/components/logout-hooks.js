import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId =
  '726248721946-lglpeldjdjunlblp4hqlphidt40d760e.apps.googleusercontent.com';

function LogoutHooks() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <a onClick={signOut} className='rightbtn'>Logout</a>
  );
}

export default LogoutHooks;