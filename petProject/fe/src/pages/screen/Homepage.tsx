import { useState } from "react"
import FeesHistory from "./FeeHistory";
import BottleHistory from "./BottleHistory"

const Homepage = () => {
  const [toggle, setToogle]= useState<boolean>(false);
  const [toggle1, setToogle1]= useState<boolean>(true);

    const onToggle = () =>{
      setToogle(false);
      setToogle1(true);
    };
    const onToggle1 = () =>{
      setToogle1(true);
      setToogle(false);
    };

  return (
    <div className="w-full h-screen ">
      <center>
        <div className="mt-10 flex justify-center w-full gap-5">
        <div className={`w-[300px] h-[70px] bg-[${
          toggle1 ? "dodgerblue" : "white"
        }] rounded-md flex justify-center items-center font-semibold text-[15px]
        border-[${toggle1 ? "" : "1px"}]
         text-[${
            toggle1 ? "white" : "dodgerblue"
          }
        ] hover:cursor-pointer hover:scale-[1.03] duration-500 transition-all `}
        onClick={onToggle}
        >BagHistory</div>

        <button className={`w-[300px] h-[70px] bg-[${
          toggle1 ? "dodgerblue" : "white"
        }] rounded-md flex justify-center items-center font-semibold text-[15px] hover:cursor-pointer hover:scale-[1.03] duration-500 transition-all
        border-[${toggle1 ? "" : "1px"}]
        text-[${
           toggle1 ? "white" : "dodgerblue"
         }  `}
         onClick={onToggle1}>feesHistory</button>
        
       
        </div>
        {
          toggle ? ( <div>
            <BottleHistory/>
           </div>
          ) : (
            <div>
            <FeesHistory/>
           </div>
          )
        }
      </center>
    </div>
  );
};

export default Homepage