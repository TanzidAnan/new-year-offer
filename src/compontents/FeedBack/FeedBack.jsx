/* eslint-disable react/prop-types */

const FeedBack = ({ feedback }) => {
    console.log(feedback)
    return (
        <div className="w-10/12 mx-auto">
            <div className="grid grid-cols-3 gap-3">
                {
                    feedback.map((feed, idx) => <div key={idx} className="card bg-slate-200 shadow-xl">
                        <div className="card-body">
                            <div className="flex gap-4">
                                <img src={feed.img} className="w-14 h-14 rounded-full" alt="" />
                                <h2 className="card-title">{feed.name}</h2>
                            </div>
                            <p>{feed.review}</p>

                            <div className="card-actions justify-end items-center">
                                <div className="rating w-20">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <button className="btn bg-green-900 text-white btn-sm border-none">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FeedBack;