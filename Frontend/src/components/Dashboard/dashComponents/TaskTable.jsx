import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import { AvatarGroup, IconButton, Avatar } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import { useEffect, useState } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import AddStaff from './AddStaff';
const TASK_URL = '/api/v0/task';

const TaskTable = () => {
  const axiosPrivate = useAxiosPrivate();
  const [task, setTask] = useState([]);
  const [headerName, setHeaderName] = useState('Task Name');
  useEffect(() => {
    const getAllTask = async () => {
      try {
        const response = await axiosPrivate.get(TASK_URL);
        setTask(response?.data?.data?.allTask);
        console.log(response?.data?.data?.allTask);
      } catch (error) {
        console.log(error?.message);
      }
    };
    getAllTask();
  }, []);
  const tableHead = [
    'Task Name',
    'Description',
    'Due Date',
    'Assigned',
    'Status',
    'Conversations',
    'Files',
  ];
  const handleChange = async (e) => {
    return null;
  };
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {tableHead.map((el) => {
              return (
                <TableCell key={tableHead.indexOf(el)}>
                  <h2>{el}</h2>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {task.map((el) => {
            const [id, name, description, date, status] = [
              el._id,
              el.name,
              el.description,
              el.dueDate.split('T')[0],
              el.status,
            ];
            return (
              <TableRow key={id}>
                <TableCell>
                  <input type='text' value={name} onChange={handleChange} />
                </TableCell>
                <TableCell>
                  <input
                    type='text'
                    value={description}
                    onChange={handleChange}
                  />
                </TableCell>
                <TableCell>
                  <h2>{date}</h2>
                </TableCell>
                <TableCell>
                  <AddStaff id={id} />
                </TableCell>
                <TableCell>
                  <h2>{status}</h2>
                </TableCell>
                <TableCell>
                  <IconButton>
                    <AddCommentOutlinedIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <h2>files</h2>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
