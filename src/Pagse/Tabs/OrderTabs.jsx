/* eslint-disable react/prop-types */
import Cetegory from "./Cetegory";


const OrderTabs = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-4">
        {
            items.map(tabs => <Cetegory
                key={tabs._id}
                tabs={tabs}
            ></Cetegory>)
        }
    </div>
    );
};

export default OrderTabs;