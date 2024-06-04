import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Place from "./AllCart/Place";

const Package = () => {
    const [menu, setMenu] = useState([]);
    // console.log(menu);
    const data = menu.slice(0, 3);

    useEffect(() => {
        fetch('http://localhost:3000/menu')
            .then(res => res.json())
            .then(data => setMenu(data))
            .catch(error => console.error('Error fetching menu:', error));
    }, []);
    
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-10">
                {
                    data.map(item => <Place
                    item={item}
                    key={item._id}
                    ></Place>
                       
                    )
                }
            </div>

            <div className="mt-12 mb-8">
                        <Link to='/package'>
                            <button className="btn btn-outline text-white btn-success ">All Packages</button>
                        </Link>
                    </div>
            
        </div>
    );
};

export default Package;
