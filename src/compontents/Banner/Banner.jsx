
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[80vh] w-[80%] mx-auto rounded-lg mt-5">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img
                            src="https://i.ibb.co.com/TgPp8Mv/thumb-16732.jpg"
                            className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;