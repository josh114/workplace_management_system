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
  const TASK_URL = '/api/v0/task';
  const getAllStaffPath = '/api/v0/staff';
  const axiosPrivate = useAxiosPrivate();
  const [active, setActive] = useState(false);
  const [staf, setStaf] = useState([]);
  const [staff, setStaff] = useState([]);
  const [person, setPerson] = useState([]);
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
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const response = await axiosPrivate.patch(
                  `${TASK_URL}/${props.Id}`,
                  { person },
                  { new: true }
                );
                console.log(response?.data);
              } catch (error) {
                console.log(error?.message);
              }
            }}
          >
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
                      console.log('this is value', value);
                      console.log('this is name', name);
                      const id = document.getElementById(`${name}`);
                      if (id.checked == true) {
                        staff.push(value);
                        // setStaff([...staff, value]);
                        console.log('this is first if con', staff);
                      } else if (id.checked == false) {
                        let index = staff.indexOf(value);
                        if (index > -1) {
                          staff.splice(index, 1);
                          console.log('this is sec if con', staff);
                        }
                      }
                      console.log(staff);
                      // setPerson(staff);
                      // console.log('this id staff', staff);
                      // console.log('this is person', person);
                    }}
                  />
                </div>
              );
            })}
            <button type='submit'>Add</button>
          </form>
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
