import React from 'react';

const AboutHero = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-white p-6">
            <div className="container max-w-3xl text-center space-y-6">
                <h1 className="text-4xl font-bold text-secondary">About Us</h1>
                <p className="text-lg">
                    We are a team of passionate developers dedicated to crafting the best
                    digital solutions for our clients. With years of experience in the
                    industry, we aim to bring innovation and excellence in every project.
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                    <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-secondary">Our Mission</h2>
                        <p className="text-sm">
                            To deliver high-quality software solutions that make a positive
                            impact on businesses and communities.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-secondary">Our Vision</h2>
                        <p className="text-sm">
                            To be a leading provider of innovative technology solutions that
                            drive growth and success.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                    <button className="btn btn-secondary btn-wide">Contact Us</button>
                    <button className="btn btn-outline btn-dark btn-wide"> Learn More </button>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
