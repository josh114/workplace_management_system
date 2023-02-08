import { useState } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
const URL = '/api/v0/staff';

const CreateStaff = () => {
  const axiosPrivate = useAxiosPrivate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosPrivate.post(
        URL,
        {
          name,
          email,
        },
        {
          'Content-Type': 'application/json',
        }
      );
      setName('');
      setEmail('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='crstaffgroup'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='crstaffgroup'>
          <label htmlFor='email'>email</label>
          <input
            type='email'
            id='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>Invite Member</button>
      </form>
    </div>
  );
};

export default CreateStaff;
