import React from 'react'

const HomeHeroSection = () => {
    return (
        <>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1529042355636-0f06afe127a9?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}>
                <div className="hero-overlay bg-opacity-60 bg-black"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-7xl text-white font-bold">Cook Like a Chef at Home</h1>
                        <p className="mb-5">
                            Find simple, step-by-step recipes to elevate your meals.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHeroSection