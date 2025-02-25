import React, { useRef, useEffect } from 'react';

import { Card } from '../commonStyledComponents/CommonStyledComponents.style';

interface StatCardProps {
    value: number;
    label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const element = ref.current as HTMLElement | null;
        if (!element) {
            return;
        }

        let current = 0;
        const duration = 2000;
        const increment = value / (duration / 16); // around 60 fps

        const updateValue = () => {
            current += increment;
            if (current > value) {
                current = value;
            }
            element.innerText = Math.floor(current).toString();
            if (current < value) {
                requestAnimationFrame(updateValue);
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        updateValue();
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [value]);

    return (
        <Card className="low-padding">
            <h1 ref={ref}>0</h1>
            <div>{label}</div>
        </Card>
    );
};
