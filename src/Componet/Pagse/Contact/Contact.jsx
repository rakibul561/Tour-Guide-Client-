import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {

    const handleClick = () =>{
        toast.success("successfull your message");
       
    }
    return (
        <div>
            <Helmet>
                <title>Tour Guide || Support</title>
            </Helmet>
             <form className="card-body w-3/4 mx-auto ">
                        <div className="grid mt-28 mb-20 bg-base-300 p-8 rounded-lg border-blue-600 grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Frist Name</span>
                                </label>
                                <input type="text" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" name="date" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input type="email"  name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number"  className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <input type="text" className="input input-bordered" required />
                            </div>
                            <button onClick={handleClick} className="btn w-[100px] text-white btn-info">Send</button>
                        </div>
                       <Toaster></Toaster>
                        
                    </form>
                    
            
        </div>
    );
};

export default Contact;