import { useEffect, useState } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';

const Conversation = (props) => {
  const chatUrl = '/api/v0/chat';
  const axiosPrivate = useAxiosPrivate();
  const [chat, setChat] = useState([]);
  const [msg, setMsg] = useState('');
  useEffect(() => {
    const getChats = async () => {
      try {
        const chats = await axiosPrivate.get(chatUrl);
        console.log(chats);
        setChat(chats);
      } catch (error) {
        console.log(error?.message);
      }
    };
    getChats();
  }, []);
  return (
    <div>
      <div className='chatcontainer'>
        <div className='chatmessages'>
          {/* {chat.map((el) => {
            return <p>{el.chat}</p>;
          })} */}
        </div>
        <form
          onSubmit={async (e) => {
            try {
              const id = props.id;
              const response = await axiosPrivate.post(chatUrl, { taskId: id });
              console.log(response);
            } catch (error) {
              console.log(error?.message);
            }
          }}
        >
          <input
            type='text'
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          />
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Conversation;
