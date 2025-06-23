import { useEffect, useRef, useState, useCallback } from 'react';

export function usePlayer() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0); // in %
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.paused
      ? videoRef.current.play()
      : videoRef.current.pause();
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleSeek = (value) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = (value / 100) * duration;
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100);
      setDuration(video.duration);
    };
    const onVolumeChange = () => setIsMuted(video.muted);
    const onFullscreenChange = () =>
      setIsFullscreen(!!document.fullscreenElement);

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('volumechange', onVolumeChange);
    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('volumechange', onVolumeChange);
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  }, []);

  return {
    videoRef,
    containerRef,
    isPlaying,
    isMuted,
    progress,
    duration,
    isFullscreen,
    togglePlay,
    toggleMute,
    handleSeek,
    toggleFullscreen,
  };
}
