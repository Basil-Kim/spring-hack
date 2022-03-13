import React from 'react'

import './ListItem.css'

const Bar = (props) => {
  const { bgcolor, completed } = props

  const containerStyles = {
    height: 10,
    width: 'inherit',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 50,
  }

  const fillerStyles = {
    height: 'inherit',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  }
  return (
    <div className="bar" style={containerStyles}>
          <div style={fillerStyles}>
            <span  style={labelStyles}>{`${completed}%`}</span>
          </div>
        </div>
  )
}

export default Bar
