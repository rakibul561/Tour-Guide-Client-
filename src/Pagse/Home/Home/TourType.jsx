// src/components/TourType.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const TourType = () => {
    const tourTypes = [
        { id: 1, name: 'Adventure' },
        { id: 2, name: 'Relaxation' },
        { id: 3, name: 'Cultural' },
        // Add more tour types as needed
    ];

    return (
        <div className="tour-type-section">
            <h2 className="text-4xl font-bold text-center mt-20">Tour Types</h2>
            <div className="grid grid-cols-1 rounded-full md:grid-cols-3 gap-6 mt-10">
                {tourTypes.map((type) => (
                    <Link to={`/tour-type/${type.id}`} key={type.id} className="tour-type-card">
                        <div className="p-6 border rounded shadow hover:bg-gray-100">
                            <h3 className="text-2xl font-semibold">{type.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TourType;
