
import React, { useEffect, useState } from 'react';

export default function Spinner() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1000); // Change delay time if needed

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);

    if (!isVisible) return null;

    return (
        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    );
}

