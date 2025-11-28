import React, { useRef, useState } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

export interface AudioPlayerProps {
    src: string;
    title?: string;
    artist?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, title, artist }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const skip = (seconds: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime += seconds;
        }
    };

    return (
        <div className="border-4 border-neo-black bg-neo-white p-6">
            <audio ref={audioRef} src={src} onEnded={() => setIsPlaying(false)} />

            {(title || artist) && (
                <div className="mb-6">
                    {title && <h3 className="text-xl font-bold">{title}</h3>}
                    {artist && <p className="text-neo-gray-600">{artist}</p>}
                </div>
            )}

            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={() => skip(-10)}
                    className="p-3 border-3 border-neo-black hover:bg-neo-gray-100 transition-colors"
                    aria-label="Skip back 10 seconds"
                >
                    <SkipBack className="w-5 h-5" />
                </button>

                <button
                    onClick={togglePlay}
                    className="p-4 bg-neo-black text-neo-white border-3 border-neo-black
                               shadow-neo hover:translate-x-[2px] hover:translate-y-[2px]
                               hover:shadow-none transition-all"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>

                <button
                    onClick={() => skip(10)}
                    className="p-3 border-3 border-neo-black hover:bg-neo-gray-100 transition-colors"
                    aria-label="Skip forward 10 seconds"
                >
                    <SkipForward className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};
