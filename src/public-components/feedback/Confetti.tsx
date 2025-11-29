import React, { useRef } from 'react';

export interface ConfettiRef {
    fire: (options?: any) => void;
}

export interface ConfettiProps {
    className?: string;
    onMouseEnter?: () => void;
}

export const Confetti = React.forwardRef<ConfettiRef, ConfettiProps>(
    ({ className = '', onMouseEnter }, ref) => {
        const canvasRef = useRef<HTMLCanvasElement>(null);

        React.useImperativeHandle(ref, () => ({
            fire: () => {
                if (!canvasRef.current) return;
                
                const canvas = canvasRef.current;
                const ctx = canvas.getContext('2d');
                if (!ctx) return;

                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;

                const particles: any[] = [];
                const particleCount = 100;

                for (let i = 0; i < particleCount; i++) {
                    particles.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height - canvas.height,
                        size: Math.random() * 8 + 4,
                        speedY: Math.random() * 3 + 2,
                        speedX: Math.random() * 4 - 2,
                        color: ['#000000', '#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF'][Math.floor(Math.random() * 5)],
                    });
                }

                function animate() {
                    if (!ctx || !canvas) return;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    particles.forEach((particle, index) => {
                        particle.y += particle.speedY;
                        particle.x += particle.speedX;

                        ctx.fillStyle = particle.color;
                        ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
                        ctx.strokeStyle = '#000000';
                        ctx.lineWidth = 2;
                        ctx.strokeRect(particle.x, particle.y, particle.size, particle.size);

                        if (particle.y > canvas.height) {
                            particles.splice(index, 1);
                        }
                    });

                    if (particles.length > 0) {
                        requestAnimationFrame(animate);
                    }
                }

                animate();
            },
        }));

        return (
            <canvas
                ref={canvasRef}
                className={className}
                onMouseEnter={onMouseEnter}
                style={{ pointerEvents: onMouseEnter ? 'auto' : 'none' }}
            />
        );
    }
);

Confetti.displayName = 'Confetti';

export const ConfettiDemo: React.FC = () => {
    const confettiRef = useRef<ConfettiRef>(null);

    return (
        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden border-4 border-neo-black bg-neo-white">
            <span className="pointer-events-none bg-gradient-to-b from-neo-black to-neo-gray-400 bg-clip-text text-center text-6xl font-bold uppercase leading-none text-transparent">
                Confetti
            </span>

            <Confetti
                ref={confettiRef}
                className="absolute left-0 top-0 z-0 size-full"
                onMouseEnter={() => {
                    confettiRef.current?.fire({});
                }}
            />
        </div>
    );
};
