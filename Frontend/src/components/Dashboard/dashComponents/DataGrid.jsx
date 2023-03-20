import { useEffect, useState, useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import moment from 'moment';
import { DataGrid } from '@mui/x-data-grid';
import Input from './Input';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
const TASK_URL = 'api/v0/task';

const Grid = () => {
  const axiosPrivate = useAxiosPrivate();
  const [task, setTask] = useState([]);
  const [pageSize, setPagesize] = useState(5);
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
  const columns = useMemo(
    () => [
      {
        field: 'name',
        headerName: 'Task Name',
        width: 200,
        editable: true,
        // renderCell: (params) => <Input {...{ params }} />,
      },
      {
        field: 'description',
        headerName: 'Task Description',
        width: 250,
        editable: true,
      },
      {
        field: 'dueDate',
        headerName: 'Task Due Date',
        width: 200,
        renderCell: (params) =>
          moment(params.row.dueDate).format('YYYY-MM-DD HH:MM:SS'),
      },
      { field: 'person', headerName: 'Assigned', width: 200 },
      { field: 'status', headerName: 'Task Status', width: 200 },
      { field: 'conversations', headerName: 'Task Conversations', width: 200 },
      { field: 'attachedFiles', headerName: 'Attached Files', width: 200 },
    ],
    []
  );
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Typography
        variant='h3'
        component='h3'
        sx={{ textAlign: 'center', mt: 3, mb: 3 }}
      >
        Manage Tasks
      </Typography>
      <DataGrid
        columns={columns}
        rows={task}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[5, 10, 15]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPagesize(newPageSize)}
      />
    </Box>
  );
};

export default Grid;
