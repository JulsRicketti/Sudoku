import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export default function Toast ({ type = 'error', message, display, hideToast }) {
  useEffect(() => {
    setTimeout(() => {
      hideToast()
    }, 10000)
  })

  return display
    ? (
    <div className='toast'>
      <div className={type}>
        <p>{message}</p>
      </div>
    </div>
      )
    : null
}

Toast.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string.isRequired,
  display: PropTypes.bool.isRequired,
  hideToast: PropTypes.func.isRequired
}
