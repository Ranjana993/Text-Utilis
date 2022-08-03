import React from 'react'

const Alert = ({ alert }) => {
  const capitalise = (word) => {
    const lower = word.toLowerCase()
    // console.log(lower);
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  return (
    <div style={{height:"50px"}}>
      {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalise(alert.type)}</strong>:{alert.msg}
      </div>}
    </div>
  )
}

export default Alert