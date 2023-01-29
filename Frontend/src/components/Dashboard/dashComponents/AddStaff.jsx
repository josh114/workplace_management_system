import { useState, useEffect } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { AvatarGroup, IconButton, Avatar } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
// import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';
import './dash.css';

const AddStaff = () => {
  const getAllStaffPath = '/api/v0/staff';
  const axiosPrivate = useAxiosPrivate();
  const [active, setActive] = useState(false);
  const [staf, setStaf] = useState([]);
  const [staff, setStaff] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const getAllStaff = async () => {
      try {
        const response = await axiosPrivate.get(getAllStaffPath);
        // setStf(response?.body);
        setStaf(response?.data?.response);
        setName('Jennifer Mutua');
        console.log(response?.data?.response);
      } catch (error) {
        console.log(error);
      }
    };
    getAllStaff();
  }, []);
  const addStaff = (e) => {
    setActive(true);
  };
  const submitStaff = () => {
    return null;
  };
  const addStaff2 = (e) => {
    setActive(false);
  };
  return (
    <div className='crtaskform-group_staff'>
      <p>Assign Staff</p>
      <div className='staff-icon'>
        <IconButton onClick={addStaff}>
          <AddCircleOutlineIcon sx={{ fontSize: 25 }} />
        </IconButton>
        <div className={active ? 'staffList' : 'inactiveStaffList'}>
          <IconButton className='close-staff' onClick={addStaff2}>
            <CloseIcon />
          </IconButton>
          <form onSubmit={submitStaff} className='addstaff-form'>
            <select name='staff' id='staff' multiple='multiple'>
              {staf.map((el) => {
                return (
                  <option value={el._id} key={el._id}>
                    {el.name}
                  </option>
                );
              })}
            </select>
          </form>
          {/* {staf.map((el) => {
            return (
              <div className='staffItem' key={el._id}>
                
              </div>
            );
          })} */}
        </div>
      </div>

      <AvatarGroup max={2}>
        {staff.map((el) => {
          return (
            <Tooltip
              title={<h1 style={{ fontSize: 13 }}>{el.name}</h1>}
              arrow
              placement='top'
              key={el._id.toString()}
            >
              <Avatar
                sx={{ bgcolor: 'lightgrey' }}
                alt={`${el.name}`}
                key={el._id}
              >
                <IconButton>
                  <AccountCircleIcon sx={{ fontSize: 25 }} />
                </IconButton>
              </Avatar>
            </Tooltip>
          );
        })}
      </AvatarGroup>
    </div>
  );
};

export default AddStaff;
