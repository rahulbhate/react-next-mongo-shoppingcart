import React, { useEffect} from 'react';
import LoginForm from '../src/components/LoginForm/LoginForm';
function Login(props) {
  console.log(props);
  return (
    <div>
      <LoginForm />
    </div>
  );
}
Login.getInitialProps = async () => {
  
}
export default Login;
