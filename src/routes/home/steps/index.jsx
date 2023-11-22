import React, { useState } from 'react'
import './index.scss'

function TimeSlector() {
  const timenNodes = [
    {
      id: 0,
      time: '1 WEEK'
    },
    {
      id: 1,
      time: '2 WEEKS'
    },
    {
      id: 2,
      time: '1 MONTH'
    },
    {
      id: 3,
      time: '2 MONTHS'
    }
  ]

  const [currentNodeId, setCurrentNodeId] = useState(0)

  const handleClick = id => {
    setCurrentNodeId(id)
  }

  return (
    <div className="time-selector">
      <div className="progress-container">
        <progress value={currentNodeId} max={timenNodes.length - 1} />

        <div className="progress-dots">
          {timenNodes.map(tN => (
            <div
              className={`outer-dot ${
                tN.id < currentNodeId ? 'small-orange' : tN.id === currentNodeId ? 'large-orange' : ''
              }`}
              onClick={() => handleClick(tN.id)}
              key={tN.id}
            >
              <div className={`inner-dot ${tN.id <= currentNodeId ? 'white' : ''}`}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="times-container">
        {timenNodes.map(tN => (
          <div className={tN.id <= currentNodeId ? 'orange' : ''} key={tN.id} onClick={() => handleClick(tN.id)}>
            {tN.time}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimeSlector
