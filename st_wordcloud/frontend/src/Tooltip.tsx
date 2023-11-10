import React from 'react';

interface TooltipProps {
    text: string;
    topic: string
    x: number;
    y: number;
    visible: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({text, topic, x, y, visible}) => {
    if (!visible) return null;

    return (
        <div style={{
            position: "absolute",
            top: y,
            left: x,
            backgroundColor: "white",
            padding: "5px",
            border: "1px solid black",
            zIndex: 1000
        }}>
            {"Word : " + text}
            <br />
            {"Topic : " + topic}
        </div>
    );
}

export default Tooltip;
