import React from 'react';
import { usePlayer } from './HeadlessPlayerLib/usePlayer.js';

export const MyPlayer = ({ src, width = 540 }) => {
  const {
    videoRef,
    containerRef,
    isPlaying,
    isMuted,
    progress,
    duration,
    isLoading,
    togglePlay,
    toggleMute,
    handleSeek,
    toggleFullscreen,
  } = usePlayer();

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        backgroundColor: '#000',
        width,
      }}
    >
      {/* Wrap video and loader together */}
      <div style={{ position: 'relative' }}>
        <video
          ref={videoRef}
          src={src}
          style={{ width: '100%', display: 'block' }}
          controls={false}
        />

        {/* Loader over video only */}
        {isLoading && (
          <div
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(0,0,0,0.4)',
              color: 'white',
              zIndex: 1,
            }}
          >
            Loading...
          </div>
        )}
      </div>

      {/* Controls below video */}
      <div
        style={{
          display: 'flex',
          gap: 8,
          padding: 8,
          alignItems: 'center',
          background: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
          zIndex: 0,
        }}
      >
        <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        <input
          type="range"
          min={0}
          max={100}
          value={(progress / duration) * 100 || 0}
          onChange={(e) => handleSeek((Number(e.target.value) / 100) * duration)}
          style={{ flex: 1 }}
        />
        <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
        <button onClick={toggleFullscreen}>Fullscreen</button>
      </div>
    </div>
  );
};
