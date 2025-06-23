import React from 'react';
import { usePlayer } from './HeadlessPlayerLib/usePlayer.js';

export const MyPlayer = ({ src, width = 540 }) => {
  const {
    videoRef,
    containerRef,
    isPlaying,
    isMuted,
    progress,
    togglePlay,
    toggleMute,
    handleSeek,
    toggleFullscreen,
  } = usePlayer();

  return (
    <div ref={containerRef} style={{ width, position: 'relative', backgroundColor: '#000' }}>
      <video
        ref={videoRef}
        src={src}
        style={{ width: '100%' }}
        controls={false}
      />

      <div
        style={{
          display: 'flex',
          gap: 8,
          padding: 8,
          alignItems: 'center',
          background: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
        }}
      >
        <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        <input
          type="range"
          min={0}
          max={100}
          value={progress}
          onChange={(e) => handleSeek(Number(e.target.value))}
          style={{ flex: 1 }}
        />
        <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
        <button onClick={toggleFullscreen}>Fullscreen</button>
      </div>
    </div>
  );
};
