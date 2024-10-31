import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="w-[100%] h-[100vh] ">
        <center className=" mt-[20px] ">
            {/* form */}
            <form>
            <div className=" text-[15px] font-semibold " >Register</div>
            {/* input */}
            <div className=" w-[500px] h-[50px] border mt-5 rounded-sm  ">
                <input 
                className="p-2 w-[100%] h-[100%] outline-none text-[15px] font-medium "
                placeholder="name"
                 type="text" />
            </div>
            <div className=" w-[500px] h-[50px] border mt-5 rounded-sm  ">
                <input 
                className="p-2 w-[100%] h-[100%] outline-none text-[15px] font-medium "
                placeholder="email"
                 type="text" />
            </div>
            <div className=" w-[500px] h-[50px] border mt-5 rounded-sm  ">
                <input 
                className="p-2 w-[100%] h-[100%] outline-none text-[15px] font-medium "
                placeholder="name"
                 type="text" />
            </div>
            <div className=" w-[500px] h-[50px] border mt-5 rounded-sm  ">
                <input 
                className="p-2 w-[100%] h-[100%] outline-none text-[15px] font-medium "
                placeholder="name"
                 type="text" />
            </div>
            <div className=" w-[500px] h-[50px] border mt-5 rounded-sm  ">
                <input 
                className="p-2 w-[100%] h-[100%] outline-none text-[15px] font-medium "
                placeholder="location"
                 type="text" />
            </div>
            <div className="w-[500px] h-[50px] bg-[dodgerblue] mt-5 rounded-sm">
            <button type="submit"
            className="p-2 w-[100%] h-[100%] text-[white] text-[15px] ">Register</button>
            </div>
           <Link to="/sign-in">
           <div className="w-[500px] h-[50px] border mt-5 rounded-sm">
            <button className="p-2 w-[100%] h-[100%] text-[dodgerblue] text-[15px] ">signIn</button>
            </div></Link>
                        </form>
             {/* form */}
        </center>
    </div>
  )
}

export default Register