import React, { useState } from 'react';
import DaenerysImage from '../images/Daenerys targaryen.jpg';
import PandaImage from '../images/Panda.jpg';
import  Rs200bkeImage from '../images/Rs200bke.jpg';
import RossiImage from '../images/Rossi.jpg';
import SansaImage from '../images/Sansastark.jpg';
import NeymarImage from '../images/Neymar.jpg';
import jackSparrowImage from '../images/jacksparrow-1.jpg'; 
import './Call.css';

const initialCalls = [
  { id: 1, name: 'Captain Jack', type: 'Incoming', time: '12:30 PM', duration: '5 mins' ,image:jackSparrowImage},
  { id: 2, name: 'Daenerys', type: 'Outgoing', time: '11:45 AM', duration: '2 mins' ,image: DaenerysImage },
  { id: 3, name: 'Kiddo', type: 'Missed', time: '10:15 AM', duration: 'N/A',image: PandaImage },
  { id: 4, name: 'Luna', type: 'Incoming', time: '9:00 AM', duration: '10 mins' ,image: Rs200bkeImage },
  { id: 5, name: 'Dada', type: 'Outgoing', time: 'Yesterday', duration: '3 mins' ,image: RossiImage},
  { id: 6, name: 'Sansa stark', type: 'Missed', time: 'Yesterday', duration: 'N/A',image: SansaImage },
  { id: 7, name: 'Neymar', type: 'Incoming', time: '2 days ago', duration: '7 mins',image: NeymarImage  },
];

const Call = () => {
  const [calls, setCalls] = useState(initialCalls);
  const [selectedCall, setSelectedCall] = useState(null);

  const handleCallClick = (call) => {
    setSelectedCall(call);
  };

  return (
    <div className='call_page'>
      <h1>Call History</h1>
      <div className='call_list'>
        {calls.map((call) => (
          <div
            className={`call_item ${selectedCall?.id === call.id ? 'active' : ''}`}
            key={call.id}
            onClick={() => handleCallClick(call)}
          >
            <div className='call_avatar'>
              <img src={call.image} alt={call.name} />
            </div>
            <div className='call_info'>
              <h2>{call.name}</h2>
              <span>{call.type}</span>
            </div>
            <div className='call_time'>
              <span>{call.time}</span>
            </div>
          </div>
        ))}
      </div>
      {selectedCall && (
        <div className='call_details'>
          
          <div><img src={selectedCall.image} alt={selectedCall.name} />
          </div>
          <div>
          <h2>{selectedCall.name}</h2>
          <p>Call type: {selectedCall.type}</p>
          <p>Time: {selectedCall.time}</p>
          <p>Duration: {selectedCall.duration}</p>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Call;