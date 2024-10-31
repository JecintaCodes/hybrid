import image from "../../assets/ex1.jpg";
import useUser from "../../global/Jotai.";
// import { useBagHistory } from "../../hooks/useBagHistory";

const Baghistory = () => {



  return (
   
        <div className="w-[550px] h-[300px] justify-between flex items-center  border mt-5 rounded-md flex-wrap px-5">
          <div className="w-[300px] border h-[100px] p-3  items-center justify-center ">
            <div className="flex">
              <div className="items-center flex">quantity:</div>
              <span className="ml-3">jjhjjj</span>
            </div>
            <div className="flex  mt-2">
              {" "}
              <div className="items-center flex">cost:</div>
              <span className="ml-3">555</span>
            </div>
          </div>
          <div className="w-[200px] border h-[100px] ">
            <img
              src={image}
              alt=""
              className=" w-[100%] h-[100%] object-cover "
            />
          </div>
        </div>
   
   
  );
};

export default Baghistory;
