import React, { useState } from 'react';

function VideoDescription({ description }) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Maximum number of characters to show in "Less" mode
    const MAX_LENGTH = 100;

    // Function to toggle between "More" and "Less"
    const toggleDescription = () => {
        setIsExpanded((prevState) => !prevState);
    };

    // Determine the text to display
    const displayedText = isExpanded
        ? description // Show full description in expanded mode
        : description.slice(0, MAX_LENGTH) + (description.length > MAX_LENGTH ? '...' : '');

    return (
        <div className="text-white">
            <p className='text-xm'>{displayedText}</p>
            {description.length > MAX_LENGTH && (
                <button
                    onClick={toggleDescription}
                    className="text-white-500 mt-2 "
                >
                    {isExpanded ? 'Less' : 'More'}
                </button>
            )}
        </div>
    );
}

export default VideoDescription;
