import useAuth from './useAuth';
import { axiosPrivate } from '../api/axios';
import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const useAxiosPrivate = () => {
  const location = useLocation();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          <Navigate to='/login' state={{ from: location }} replace />;
          const token = localStorage.getItem('token');
          prevRequest.headers['Authorization'] = `Bearer ${token}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, []);

  return axiosPrivate;
};

export default useAxiosPrivate;
