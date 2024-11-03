const YouTubePlayer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:ml-24 mt-10 mb-14">
            <div className="flex justify-center">
                <iframe
                    className="w-full max-w-md md:max-w-full h-64 md:h-80 lg:h-96"
                    src="https://www.youtube.com/embed/bpA-aWDh6zU?si=rsAvSI-OkTIIAB9J"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="flex justify-center">
                <iframe
                    className="w-full max-w-md md:max-w-full h-64 md:h-80 lg:h-96"
                    src="https://www.youtube.com/embed/4FrPZoofdBQ?si=TjZZjv0OoS-gCWl0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default YouTubePlayer;
