import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const useAuth = () => {
  const [auth, setAuth] = useState(null); // Start with null to indicate loading state
  const navigate = useNavigate()
 

  
    const handleLogout = () => {
      Cookies.remove('token');
      setAuth(false);
      // if user not authanticated redirected to home page
      navigate('/')
    };
  


  useEffect(() => {
    const token = Cookies.get('token');
    setAuth(!!token); // Set auth to true if token exists, false otherwise
  }, []);

  
  

  return { auth, handleLogout };
};

export const IsAuth = ()=>{
  const isAuthenticated = useSelector((state)=> state.auth.isAuthenticated)
  return isAuthenticated

}