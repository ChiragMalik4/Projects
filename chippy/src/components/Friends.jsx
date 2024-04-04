import React, {useEffect, useState } from 'react'
import '../components/css/Sidebar.css'
import axios from 'axios';
import Chat from './Chat';

export const Friends = ({isFolded})=>{
    const [Friends, setFriends] = useState([]);
    const [isClick, setisClick] = useState(false);
    const [friendId, setFriendId] = useState('');

    const user_info = localStorage.getItem('user_data');
    const userinfo = JSON.parse(user_info);
    const userId = userinfo.id;

    useEffect(()=>{
        FetchFriends();
    }, [])

    const showChatBox=(friend_id)=>{
        setisClick(!isClick);
        setFriendId(friend_id);

    }


    const FetchFriends = async ()=> {
        const Friendurl = 'https://chiragmalik4.github.io/Projects/server/friendlist.php';
        const formdata = new FormData();
        formdata.append('userId', userId);

        await axios.post(Friendurl, formdata).then(response=>{
            setFriends(response.data);
            
        }).catch(error=>alert("Error: " + error.message));
    }

    return(
        <div className={`friends ${isFolded?'fold':''}`}>
            {!isClick &&
                <ul className='friends-list'>
                    {Friends && Friends.map(friend=>(
                        <li key={friend.id}>
                            <div>
                                {friend.Name}
                                <div>
                                ID: {friend.id}
                                </div>
                            </div>
                            <button onClick={()=>showChatBox(friend.id)}>Chat</button>
                            
                        </li>                   
                    ))}
                    
                </ul>
            }
            {isClick && <Chat friendId={friendId} isFolded={isFolded}/>}   
        </div>



    )
}