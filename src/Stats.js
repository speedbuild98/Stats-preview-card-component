import React from 'react'


function Stats(props) {
  return (
    <div className='Stats'>
          <h2 className='statsH2'>{props.stats}</h2>
          <span className='statsHead'>{props.statsHead}</span>
    </div>
  )
}

export default Stats