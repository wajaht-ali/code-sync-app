import React from "react";
import logo from "../assets/code-sync-logo-nb.png";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#1E1E1E] text-white w-full">
      <div className="w-1/3 flex flex-col items-start bg-[#333] rounded-md shadow-md p-3">
        <div className="w-full h-full flex flex-row items-center gap-x-4">
          <div className="h-[15%] w-[15%]">
            <img
              src={logo}
              alt="logo_img"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="h-14 border-r border-gray-300"></div>
          <div className="w-full h-full space-y-2">
            <h2 className="text-[20px]">Code Sync</h2>
            <p className="text-[16px]">Let the code & logic Sync.</p>
          </div>
        </div>
        <div className="w-full mt-3">
            <form className="flex flex-col items-start gap-y-2" >
                <div>
                    <h2 className="text-[16px] font-normal">Enter invitation room ID</h2>
                </div>
                <div className="w-full my-1">
                    <input className="w-full rounded px-2 py-1 outline-none ring-0" title="room_id" type="text" name="room_id" id="room_id" />
                </div>
                <div className="w-full my-1">
                <input className="w-full rounded px-2 py-1 outline-none ring-0" title="username" type="text" name="username" id="username" />
                </div>
                <div className="w-full my-1">
                    <button type="submit" className="px-4 py-1 rounded bg-violet-300">Join</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
