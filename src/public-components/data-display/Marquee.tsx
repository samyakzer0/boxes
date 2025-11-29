import React from 'react';

export interface MarqueeProps {
    children: React.ReactNode;
    pauseOnHover?: boolean;
    reverse?: boolean;
    className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
    children,
    pauseOnHover = false,
    reverse = false,
    className = '',
}) => {
    return (
        <div
            className={`flex overflow-hidden ${className}`}
            style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
        >
            <div
                className={`flex min-w-full shrink-0 animate-marquee items-center justify-around gap-4 ${
                    pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
                } ${reverse ? 'animate-marquee-reverse' : ''}`}
            >
                {children}
            </div>
            <div
                className={`flex min-w-full shrink-0 animate-marquee items-center justify-around gap-4 ${
                    pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
                } ${reverse ? 'animate-marquee-reverse' : ''}`}
                aria-hidden="true"
            >
                {children}
            </div>
        </div>
    );
};

interface ReviewCardProps {
    img: string;
    name: string;
    username: string;
    body: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ img, name, username, body }) => {
    return (
        <figure className="relative h-full w-64 cursor-pointer overflow-hidden border-3 border-neo-black bg-neo-white p-4 hover:bg-neo-gray-50 transition-colors">
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full border-2 border-neo-black" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-bold">{name}</figcaption>
                    <p className="text-xs font-bold text-neo-gray-500">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

const reviews = [
    {
        name: 'Jack',
        username: '@jack',
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: '/avatars/jack.png', // Use local assets
    },
    {
        name: 'Jill',
        username: '@jill',
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: '/avatars/jill.png',
    },
    {
        name: 'John',
        username: '@john',
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: '/avatars/john.png',
    },
    {
        name: 'Jane',
        username: '@jane',
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: '/avatars/jane.png',
    },
    {
        name: 'Jenny',
        username: '@jenny',
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: '/avatars/jenny.png',
    },
    {
        name: 'James',
        username: '@james',
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: '/avatars/james.png',
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export const MarqueeDemo: React.FC = () => {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden border-4 border-neo-black bg-neo-white py-8">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s] mt-4">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
        </div>
    );
};
