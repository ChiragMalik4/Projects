import React, {useEffect, useState } from 'react'
import '../components/css/Sidebar.css'
import axios from 'axios';

export const Inbox =({isFolded})=>{
    const [IncomingReq, setIncomingReq] = useState([]);
    const user_info = localStorage.getItem('user_data');
    const userinfo = JSON.parse(user_info);
    const userId = userinfo.id;

    useEffect(()=>{
        FetchFriendRequests();
        
    }, [])

    

    const FetchFriendRequests = async ()=>{
        const url = 'https://chiragmalik4.github.io/Projects/chippy/server/inbox.php';
        const formdata = new FormData();
        formdata.append('userId', userId);
        await axios.post(url, formdata).then(response=>{
            setIncomingReq(response.data);

        }).catch(error => alert("Error " + error.message));

    }
    
    const AcceptFriendsReq = (friendId)=>{
        const acceptrequrl = 'https://chiragmalik4.github.io/Projects/chippy/server/friendreq.php';
        const formdata = new FormData();
        formdata.append('userId', userId);
        formdata.append('friendId', friendId);
        formdata.append('action', 'accept');
        axios.post(acceptrequrl, formdata).then(response=>{
            const data = response.data;
            if(data.success){
                alert(data.message);
                FetchFriendRequests();
            }
            else{
                alert(data.message);
            }
            
        }).catch(error => alert("Error " + error.message));
        
    }

    const RejectFriendsReq = (friendId)=>{
        const rejectrequrl = 'https://chiragmalik4.github.io/Projects/chippy/server/friendreq.php';
        const formdata = new FormData();
        formdata.append('userId', userId);
        formdata.append('friendId', friendId);
        formdata.append('action', 'reject');
        axios.post(rejectrequrl, formdata).then(response=>{
            const data = response.data;
            if(data.success){
                alert(data.message);
                FetchFriendRequests();
            }
            else{
                alert(data.message);
            }
            
        }).catch(error => alert("Error " + error.message));
        
    }


    return(

        <div className={`inbox ${isFolded?'fold':''}`}>
            <ul className='inbox-list'>
                {IncomingReq && IncomingReq.map(request=>(
                    <li key={request.id}>
                        <div>{request.Name} sent you a friend request.
                            <div>ID: {request.id}</div>
                        </div>
                        <button onClick={()=>AcceptFriendsReq(request.id)}>Accept</button>
                        <button onClick={()=>RejectFriendsReq(request.id)}>Reject</button>
                    </li>
                ))}
            </ul>
        </div>

    )
}


export default Inbox