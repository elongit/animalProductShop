import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function IsPrivate() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: location } });
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, navigate, location]);

  if (loading) {
    return <div className='p-5 text-center'>Loading...</div>; // Or a loading spinner
  }

  return <Outlet />;
}

export default IsPrivate;
