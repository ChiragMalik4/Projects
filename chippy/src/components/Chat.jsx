import React, {useState, useEffect} from "react";
import axios from 'axios';
import '../components/css/Sidebar.css'

export const Chat = ({friendId, isFolded}) => {
    
    const [Messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const user_info = localStorage.getItem('user_data');
    const userinfo = JSON.parse(user_info);
    const userId = userinfo.id;

    useEffect(()=>{
        FetchMessages();
    }, []);

    const FetchMessages = async ()=>{
        try{
            const chaturl = 'https://chiragmalik4.github.io/Projects/server/chat.php';
            const formdata = new FormData();
            formdata.append('userId', userId);
            formdata.append('friendId', friendId);
            formdata.append('action', 'receive');

            await axios.post(chaturl, formdata).then(response=>{
                
                setMessages(response.data);
                console.log(response.data);
                
                
            }).catch(error=> alert("Error: " + error.message));
        } finally{
            setTimeout(FetchMessages, 1000);
        }
        
    }
    
    const sendMessage = ()=>{
        const chaturl = 'https://chiragmalik4.github.io/Projects/server/chat.php';
        const formdata = new FormData();
        formdata.append('userId', userId);
        formdata.append('friendId', friendId);
        formdata.append('action', 'send');
        formdata.append('message', newMessage);

        if(newMessage!=''){

            axios.post(chaturl, formdata).then(response=>{
                setNewMessage('');
            
                
            }).catch(error=> alert("Error: " + error.message));
        }


    }


    return(
        <div className="chat">
            <ul className="messages">
                {Array.isArray(Messages) && Messages.map(message=>(
                    <li key={message.message_id}>
                        <div>{message.sender_id}</div>
                        <div>
                            {message.message_content}
                        </div>
                        <div>
                            {message.timestamp}
                        </div>
                        
                    </li>
                ))}
                
            </ul>
            
            <input className={`${isFolded?'inputsize':''}`}
                type="text"
                value={newMessage}
                placeholder="Send a message"
                onChange={(e)=>setNewMessage(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
            
            
        </div>
        
    )
}

export default Chat