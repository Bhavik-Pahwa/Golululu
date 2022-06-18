import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '726248721946-lglpeldjdjunlblp4hqlphidt40d760e.apps.googleusercontent.com';

function LogoutComponent() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default LogoutComponent;