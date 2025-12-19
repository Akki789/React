import React, { useRef } from 'react'

export default function VideoRef() {

    const VideoRef = useRef(null)
  return (
    <div>
        <video ref={VideoRef} src="https://www.w3schools.com/html/mov_bbb.mp4" width="300" />

        <br />

        <button onClick={() => VideoRef.current.play()}>Play</button>
        <button onClick={() => VideoRef.current.pause()}>Pause</button>
    </div>
  )
}
