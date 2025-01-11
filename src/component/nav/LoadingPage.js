import React, { useState, useEffect } from 'react';
// import 'tailwindcss/tailwind.css';

function LoadingPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulate a 2-second loading time
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                    <div className="w-12 h-12 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
                </div>
            )}

        </div>
    );
}

export default LoadingPage;
