import jwt_decode from 'jwt-decode';

const Authenticate = () => {
  let tokenValid = true;
  let localToken = localStorage.getItem('ptDash');

  if (localToken) {
    const decode = jwt_decode(localToken);
    const currentTime = new Date().getTime() / 1000;

    if (currentTime > decode.exp) {
      tokenValid= false;
      console.log('Token expired. Re-login');
      return tokenValid;
    }
    return tokenValid;
  }
  return null;
}

export default Authenticate;