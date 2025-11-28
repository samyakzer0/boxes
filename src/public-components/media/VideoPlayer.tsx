import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

export interface VideoPlayerProps {
    src: string;
    poster?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const toggleFullscreen = () => {
        if (videoRef.current) {
            videoRef.current.requestFullscreen();
        }
    };

    return (
        <div className="border-4 border-neo-black bg-neo-black">
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                className="w-full"
                onEnded={() => setIsPlaying(false)}
            />
            <div className="bg-neo-white border-t-3 border-neo-black p-4 flex items-center gap-3">
                <button
                    onClick={togglePlay}
                    className="p-2 border-2 border-neo-black hover:bg-neo-gray-100 transition-colors"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button
                    onClick={toggleMute}
                    className="p-2 border-2 border-neo-black hover:bg-neo-gray-100 transition-colors"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <button
                    onClick={toggleFullscreen}
                    className="p-2 border-2 border-neo-black hover:bg-neo-gray-100 transition-colors ml-auto"
                    aria-label="Fullscreen"
                >
                    <Maximize className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};
