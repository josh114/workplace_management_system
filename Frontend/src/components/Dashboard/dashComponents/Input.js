import { useEffect, useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
const TASK_URL = '/api/v0/task';

const Input = ({ params }) => {
  const row = params?.row;
  const axiosPrivate = useAxiosPrivate();
  const [name, setName] = useState(row.name);
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200);
  const id = params.id;
  //   console.log(params);
  //   console.log(rowId);
  useEffect(() => {
    if (debounced) {
      handleSubmit();
    }

    async function handleSubmit() {
      try {
        const response = await axiosPrivate.patch(
          `${TASK_URL}/${id}`,
          { name: debounced },
          { 'Content-Type': 'application/json' }
        );
        console.log(response);
      } catch (error) {
        console.log(error?.message);
      }
    }
  }, [debounced]);
  return (
    <div>
      <input
        type='text'
        defaultValue={name}
        // onChange={(e) => setValue(e.currentTarget.value)}
        onBlur={async (e) => {
          //   const name = e.target.value;
          setValue(e.currentTarget.value);
          console.log(value);
        }}
      />
    </div>
  );
};

export default Input;
