import Logo from '../Home/header/Logo';
import { useState } from 'react';
import Button from '@mui/material/Button';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import './dashboard.css';
const LOGIN_URL = 'api/v0/workspace';

const CreateWorkSpace = () => {
  const axiosPrivate = useAxiosPrivate();
  const [workSpace, setWorkSpace] = useState('');
  const [description, setDescription] = useState('');
  const [errmsg, setErrmg] = useState('');
  const [letter, setLetter] = useState('W');
  const handleSubmit = async (e) => {
    axiosPrivate.post();
  };
  return (
    <div className='wrk'>
      <div className='navbar'>
        <Logo />
      </div>
      <div className='wrk-card'>
        <form>
          <h1>Create your first Workspace</h1>
          <div className='letterCard'>
            <h1>{letter}</h1>
          </div>
          <div className='wrkformgroup'>
            <label htmlFor='name'>Workspace Name</label>
            <input
              id='name'
              type='text'
              value={workSpace}
              onChange={(e) => {
                setWorkSpace(e.target.value);
                setLetter(workSpace[0].toUpperCase());
              }}
              required
            />
          </div>
          <div className='wrkformgroup'>
            <label htmlFor='description'>Project Description</label>
            <input
              id='description'
              type='text'
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <p>Open to all employees in your Organization</p>
          <Button variant='contained' className='regbut'>
            Create WorkSpace
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateWorkSpace;
