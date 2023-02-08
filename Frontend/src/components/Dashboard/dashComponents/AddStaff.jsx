import { useState, useEffect } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { AvatarGroup, IconButton, Avatar } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
// import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';
import './dash.css';

const AddStaff = (props) => {
  const getAllStaffPath = '/api/v0/staff';
  const axiosPrivate = useAxiosPrivate();
  const [active, setActive] = useState(false);
  const [staf, setStaf] = useState([]);
  const [staff, setStaff] = useState([]);
  // const [name, setName] = useState('');

  useEffect(() => {
    const getAllStaff = async () => {
      try {
        const response = await axiosPrivate.get(getAllStaffPath);
        // setStf(response?.body);
        setStaf(response?.data?.response);
        // console.log(response?.data?.response);
      } catch (error) {
        console.log(error);
      }
    };
    getAllStaff();
  }, []);
  const addStaff = (e) => {
    setActive(true);
  };
  const addStaff2 = (e) => {
    setActive(false);
  };
  // console.log(staff);
  return (
    <div className='crtaskform-group_staff'>
      <div className='staff-icon'>
        <IconButton onClick={addStaff}>
          <AddCircleOutlineIcon sx={{ fontSize: 25 }} />
        </IconButton>
        <div className={active ? 'staffList' : 'inactiveStaffList'}>
          <IconButton className='close-staff' onClick={addStaff2}>
            <CloseIcon />
          </IconButton>
          {staf.map((el) => {
            const [name, id] = [el.name.split(' ')[0], el._id];
            return (
              <div key={el._id}>
                <label htmlFor={name}>{el.name}</label>
                <input
                  type='checkbox'
                  value={[id, name]}
                  id={name}
                  onClick={(e) => {
                    let val = e.target.value.split(',');
                    let value = val[0];
                    const name = val[1];
                    const id = document.getElementById(`${name}`);
                    if (id.checked == true) {
                      setStaff([...staff, value]);
                    } else if (id.checked == false) {
                      let index = staff.indexOf(value);
                      if (index > -1) {
                        staff.splice(index, 1);
                      }
                    }
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* <AvatarGroup max={2}>
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
      </AvatarGroup> */}
    </div>
  );
};

export default AddStaff;
