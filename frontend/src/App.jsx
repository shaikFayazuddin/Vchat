import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import Sidebar from "./components/Sidebar";
import Notifications from "./components/Notifications";

const App = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100">
      <div className="flex flex-row justify-center items-center border-2 border-black rounded-2xl mt-8 mb-6 px-6 py-4 bg-white shadow-md w-[600px] max-w-[90%]">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Video Chat
        </h1>
      </div>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};

export default App;
