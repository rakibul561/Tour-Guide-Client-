const YouTubePlayer = () => {
    // const videoUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="flex gap-12 justify-center mt-24 mb-14">
            <div>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/bpA-aWDh6zU?si=rsAvSI-OkTIIAB9J"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>

            <div>
                <iframe
                    width="560"
                    height="315"
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
