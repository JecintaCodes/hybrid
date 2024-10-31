import { useState } from "react"
import pix from "../../assets/ex1.jpg"
import {PiEyeLight,PiEyeClosedLight} from "react-icons/pi"
import useUser from "../../global/Jotai."


const Header = () => {
  const [state, setState]: any = useUser()
  const [show, setShow] = useState<boolean>();

  // const {userData} = useUserUpdate(state._id);

  const Toggle = () =>{
    setShow(!show);
  }


  return (
    <div className="w-[100%] h-[70px] bg-[dodgerblue] flex justify-center">
      <div className="w-[90%] flex justify-between items-center">
        
     <div className="flex gap-[5px]">
     <div className="text-[15px] font-semibold flex justify-center items-center gap-[7px]">
      Balance:
     {
      show ? ( <div className="text-[15px] font-semibold">₦0</div>
      ) : (
        <div className="mx-4">****</div>
      )
     }
    <div>
      {
        show ? (
          <PiEyeLight onClick={Toggle} />
    
        ) : (
          <PiEyeClosedLight onClick={Toggle}  />

        )
      }
    </div>
     </div>

     </div>
      <div className="p-2  flex gap-5 justify-center items-center ">
        <button className="text-[15px] font-semibold bg-[white] rounded p-2 h-[40px] text-[dodgerblue] ">GetStarted</button>
        <div className="text-[15px] font-medium text-[white]  ">
          Logout
        </div>
        <div className="w-[50px] h-[50px] rounded-full border ">
          <img className="w-[100%] h-[100%] rounded-[50%] object-cover "
          src={pix} alt={pix} />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header