import { Link } from "react-router-dom"

const SignIN = () => {
  return (
    <div className="w-[100%] h-[100vh] ">
        <center className=" mt-[20px] ">
            {/* form */}
            <form>
            <div className=" text-[15px] font-semibold " >SignIN</div>
            {/* input */}
           
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
           
            <div className="w-[500px] h-[50px] bg-[dodgerblue] mt-5 rounded-sm">
            <button 
            type="submit"
            className="p-2 w-[100%] h-[100%] text-[white] text-[15px] ">SignIN</button>
            </div>
           <Link to="/register">
           <div className="w-[500px] h-[50px] border mt-5 rounded-sm">
            <button className="p-2 w-[100%] h-[100%] text-[dodgerblue] text-[15px] ">register</button>
            </div></Link>
                        </form>
             {/* form */}
        </center>
    </div>
  )
}

export default SignIN