import { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import './dashboard.css';

const Profile = () => {
  const path = '/api/v0/users';
  const axiosPrivate = useAxiosPrivate();
  const [profile, setProfile] = useState('Jane Smith');
  useEffect(() => {
    const getProfile = async () => {
      const response = axiosPrivate(path);
    };
  }, []);
  return (
    <div className='dsh-profile-com'>
      <Avatar src='http://localhost:5000/images/avatar.jpg' />
      <h1>Hi, {profile}</h1>
      <IconButton>
        <KeyboardArrowDownOutlinedIcon sx={{ fontSize: 30, color: 'gray' }} />
      </IconButton>
    </div>
  );
};

export default Profile;
