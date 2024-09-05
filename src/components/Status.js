
import React, { useState } from 'react';
import DaenerysImage from '../images/Daenerys targaryen.jpg';
import PandaImage from '../images/Panda.jpg';
import  Rs200bkeImage from '../images/Rs200bke.jpg';
import RossiImage from '../images/Rossi.jpg';
import SansaImage from '../images/Sansastark.jpg';
import NeymarImage from '../images/Neymar.jpg';
import jackSparrowImage from '../images/jacksparrow-1.jpg'; 
import './Status.css';

const initialStatuses = [
  { id: 1, name: 'Captain Jack', time: 'Today, 8:30 AM', description: 'Busy at work',image:jackSparrowImage },
  { id: 2, name: 'Daenerys', time: 'Yesterday, 10:45 PM', description: 'Just had dinner',image: DaenerysImage  },
  { id: 3, name: 'Kiddo', time: 'Yesterday, 6:00 PM', description: 'Going for a run',image: PandaImage },
  { id: 4, name: 'Luna', time: 'Yesterday, 3:30 PM', description: 'Relaxing at home',image: Rs200bkeImage },
  { id: 5, name: 'Dada', time: 'Yesterday, 12:00 PM', description: 'At the gym',image: RossiImage  },
  { id: 6, name: 'Sansa stark', time: '2 days ago, 9:00 AM', description: 'Traveling',image: SansaImage  },
  { id: 7, name: 'Neymar', time: '2 days ago, 5:00 PM', description: 'Shopping',image: NeymarImage  },
];

const Status = () => {
  const [statuses, setStatuses] = useState(initialStatuses);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  return (
    <div className='status_page'>
      <h1>Status</h1>
      <div className='status_list'>
        {statuses.map((status) => (
          <div
            className={`status_item ${selectedStatus?.id === status.id ? 'active' : ''}`}
            key={status.id}
            onClick={() => handleStatusClick(status)}
          >
            <div className='status_avatar'>

              <img src={status.image} alt={status.name} />
            </div>
            <div className='status_info'>
              <h2>{status.name}</h2>
              <p>{status.time}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedStatus && (
        <div className='status_details'>
          <div> <img src={selectedStatus.image} alt={selectedStatus.name} /></div>
          <div> 
          <h2>{selectedStatus.name}</h2>
          <p>Status time: {selectedStatus.time}</p>
          <p>Description: {selectedStatus.description}</p>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Status;