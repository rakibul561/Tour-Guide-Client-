import toast from "react-hot-toast";
import UseAuth from "../Hooks/UseAuth";
import usePublic from "../Hooks/usePublic";


const Story = () => {

    const {user} = UseAuth();
    const axiosPublic = usePublic();
    const {displayName, _id,photoURL} = user;

 

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const story = form.story.value;
        const email = user?.email;
        const userInfo = {
            name,
            story,
            id:_id,
            email,
            userName:displayName,
            photo:photoURL,


        }
        axiosPublic.post("/storys",userInfo ).then(res => {
            if (res.data.insertedId) {
              toast.success("Your story submited cheack for home pagse");
              // setSuccess("User created successfully");
              
            }
          });

    }
    return (
        <div>
            <div className="hero w-3/4 bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        
                    </div>
                    <div className="card shrink-0  shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body ">
                            <h2 className="text-4xl font-bold">Please Insert Your Story</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sport Name</span>
                                </label>
                                <input type="text" name="name" placeholder="sport Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Story</span>
                                </label>
                                <textarea className="textarea textarea-primary" name="story" placeholder="Bio"></textarea>
                                
                            </div>
                            <input className="btn  bg-success btn-block" type="submit" value=" Confrom " />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;