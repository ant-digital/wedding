import React, { useRef, useState } from "react";
const MusicPlayer = ({ song }) => {
  const player = useRef(null)
  const [muted, setMuted] = useState(false)
  const mute = () => {
    player.current.muted = !muted
    setMuted(!muted)
  }
  return (
    <div className="fixed top-4 z-50 cursor-pointer"
    // style={{position: '-webkit-sticky'}}
    // style={{ position: 'sticky', zIndex: 50, top: '50%' }}
    >
      <span className="material-icons " onClick={mute}>
        {muted?'volume_off':'volume_up'}
</span>
      <audio ref={player} autoPlay>
        <source src={song} type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
    </div>
  )
}
export default MusicPlayer