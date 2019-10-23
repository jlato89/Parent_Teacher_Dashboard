import jwt_decode from 'jwt-decode';

const Authenticate = () => {
  let tokenValid = true;
  // let userType;
  let localToken = localStorage.getItem('ptDash');

  if (localToken) {
    const decode = jwt_decode(localToken);
    const currentTime = new Date().getTime() / 1000;
    //! Idea to add userType to token and pass to dashboard
    // userType = decode.userType;

    // console.log(decode);

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