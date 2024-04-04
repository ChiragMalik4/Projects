import axios from 'axios';
import React, { useState } from 'react'


export const FriendReq = ()=>{

    const [friendID, setFriendID] = useState();

    const user_info = localStorage.getItem('user_data');
    const userinfo = JSON.parse(user_info);
    const userId = userinfo.id;


    const handleKeyPress = (event, userId) => {
        if (event.key === 'Enter') {
            SendFriendReq(userId);
        }
    };

    const SendFriendReq = (user_id)=>{
        const url = 'https://chiragmalik4.github.io/Projects/friends.php';
        const formData = new FormData();
        formData.append('friend_id', friendID);
        formData.append('sender_id', user_id);

        axios.post(url, formData).then(response=>{
            const data = response.data;
            if(data.success){
                alert(data.message);
            }else{
                alert(data.message);
            }
        }).catch(error=>alert("Error: " + error.message));

    }

    return(
        <div className='searchbar'>
          <input type='text' id='search' placeholder='Search'
          onChange={(event)=>setFriendID(event.target.value)}
          onKeyDown={(event)=>handleKeyPress(event, userId)}/>
        </div>
    )
}

export default FriendReq