import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams, useNavigate } from 'react-router-dom';

const Room = () => {
    const {roomID} = useParams();
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/')
    }
    let myMeeting = async (element) => {
        // generate Kit Token
        const appID = 855280286;
        const serverSecret = "659ed4878c5a3259b17126a579e0803c";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), 'Vimal');
        // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Copy link',
            url: `http://localhost:3000/room/${roomID}`
            //  window.location.protocol + '//' + 
            //  window.location.host + window.location.pathname +
            //   '?roomID=' +
            //   roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
        showRoomTimer: true
      });
    }
  return (
   <div>
     <div ref={myMeeting}></div>
     <div>
        <button className='btn1' onClick={handleBack}>Back</button>
        </div>
   </div>
  )
}

export default Room
