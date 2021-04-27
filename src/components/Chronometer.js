import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export default function Chronometer ({ isRunning }) {
  const [milisseconds, setMilliseconds] = useState(0)

  useEffect(() => {
    let interval = null
    if (isRunning) {
      interval = setInterval(() => {
        setMilliseconds((ms) => ms + 1)
      }, 1)
    } else {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isRunning])

  return (
    <div>
      <h3>Solution time:</h3>
      <h4>{milisseconds / 100}</h4>
    </div>
  )
}

Chronometer.propTypes = {
  isRunning: PropTypes.bool
}
