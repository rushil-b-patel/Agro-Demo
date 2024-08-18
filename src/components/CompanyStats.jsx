import React from 'react';

const CompanyStats = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-6">
                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 hover:underline">
                    Our Global Reach
                </h2>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Clients Base */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <div className="text-green-600 text-5xl font-bold">1800+</div>
                        <div className="mt-2 text-xl font-medium text-gray-700">Clients Base</div>
                    </div>
                    {/* Brands */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <div className="text-green-600 text-5xl font-bold">3400+</div>
                        <div className="mt-2 text-xl font-medium text-gray-700">Brands</div>
                    </div>
                    {/* Business Volume */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <div className="text-green-600 text-5xl font-bold">$80M</div>
                        <div className="mt-2 text-xl font-medium text-gray-700">Business Volume</div>
                    </div>
                    {/* Countries */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <div className="text-green-600 text-5xl font-bold">70+</div>
                        <div className="mt-2 text-xl font-medium text-gray-700">Countries</div>
                    </div>
                </div>

                {/* Additional Row (optional) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {/* Years of Experience */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <div className="text-green-600 text-5xl font-bold">16+</div>
                        <div className="mt-2 text-xl font-medium text-gray-700">Years of Experience</div>
                    </div>
                    {/* Projects */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <div className="text-green-600 text-5xl font-bold">500+</div>
                        <div className="mt-2 text-xl font-medium text-gray-700">Projects</div>
                    </div>
                    {/* Bags Per Year */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <div className="text-green-600 text-5xl font-bold">80M</div>
                        <div className="mt-2 text-xl font-medium text-gray-700">Bags Per Year</div>
                    </div>
                    {/* Offices Worldwide */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <div className="text-green-600 text-5xl font-bold">15</div>
                        <div className="mt-2 text-xl font-medium text-gray-700">Offices Worldwide</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyStats;
