import { AvatarGroup, IconButton, Avatar } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from 'react';
import { useState, useEffect } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import './dash.css';
import AddStaff from './AddStaff';
const LOGIN_URL = '/api/v0/task';
const getAllStaffPath = '/api/v0/staff';
const CreateTask = () => {
  const axiosPrivate = useAxiosPrivate();
  const staff = ['Deji', 'Musa', 'Jo', 'Joy', 'Ayo'];
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(null);
  const [staf, setStaf] = useState([]);
  const [status, setStatus] = useState('');
  const [stf, setStf] = useState([]);
  const [file, setFile] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosPrivate.post(
        LOGIN_URL,
        {
          name,
          description,
          date,
          status,
        },
        {
          'Content-Type': 'application/json',
        }
      );
      console.log(response);
      setName('');
      setDescription('');
      setDate(null);
      setStatus('');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='crtask'>
      <div className='crtask-card'>
        <IconButton className='closeBut'>
          <CloseIcon sx={{ fontSize: 25 }} />
        </IconButton>
        <form onSubmit={handleSubmit} className='crtaskform'>
          <h1>Create New Task</h1>
          <div className='crtaskform-group'>
            <label htmlFor='name'>Task Name</label>
            <input
              id='name'
              type='text'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className='crtaskform-group'>
            <label htmlFor='name'>Task Description</label>
            <input
              id='name'
              type='text'
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>

          <div className='crtaskform-group_date'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label='Deadline'
                value={date}
                onChange={(newValue) => {
                  setDate(newValue.$d);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>

          {/* <div className='crtaskform-group_con'>
            <p>Conversation</p>
            <Tooltip
              title={<h1 style={{ fontSize: 13 }}>Start Conversation</h1>}
              arrow
              placement='right'
            >
              <IconButton>
                <AddCommentOutlinedIcon sx={{ fontSize: 25 }} />
              </IconButton>
            </Tooltip>
          </div> */}
          <div className='crtaskform-group_status'>
            <p>Status</p>
            <select
              name='status'
              id='status'
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <option value=''>select status</option>
              <option value='done'>Done</option>
              <option value='start'>Working on it</option>
              <option value='unassigned'>Not Started</option>
              <option value='null'>Abandoned</option>
            </select>
          </div>
          <button type='submit' className='button'>
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
