import React from 'react';

const desiredWidth = () => window.innerWidth - 40;

const useTrackerSize = () => {
    const [trackerSize, setTrackerSize] = React.useState({
        width: desiredWidth(),
        height: Math.min(desiredWidth() / 1.7, 600)
    });

    React.useEffect(() => {
        const resizeHandler = () => setTrackerSize({
            width: desiredWidth(),
            height: Math.min(desiredWidth() / 1.7, 400)
        });
        window.addEventListener('resize', resizeHandler)
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    return trackerSize
};

export default useTrackerSize;