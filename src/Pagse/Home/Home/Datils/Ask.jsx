

const Ask = () => {
    return (
        <div className="md:w-3/4  mx-auto mt-16 space-y-4 mb-12">
            <div className="collapse border border-green-500  collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    What will we do on Day 1?
                </div>
                <div className="collapse-content">
                    <p>After going to the destination stall, I will clean the common areas and arrange for the hostel to stay later</p>
                </div>
            </div>
            <div className="collapse border border-green-500  collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    What will we do on Day 2?
                </div>
                <div className="collapse-content">
                    <p>All the famous places of the destination will be visited</p>
                </div>
            </div>
            <div className="collapse border border-green-500  collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    What will we do on Day 3?
                </div>
                <div className="collapse-content">
                    <p>Enjoy your tour and Back to Home</p>
                </div>
            </div>

        </div>
    );
};

export default Ask;