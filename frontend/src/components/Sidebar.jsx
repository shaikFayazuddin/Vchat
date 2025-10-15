import React, { useState, useContext } from "react";
import { Phone, PhoneOff, Copy } from "lucide-react"; // lucide icons (lighter than MUI)
import { SocketContext } from "../Context";

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div className="w-full md:w-[600px] mx-auto my-8">
      <div className="bg-white border-2 border-black rounded-2xl shadow-lg p-6">
        <form className="flex flex-col gap-6">
          {/* Account Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side */}
            <div className="flex flex-col gap-3">
              <h6 className="text-lg font-semibold">Account Info</h6>

              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
              />

              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(me)}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors"
              >
              Copy Your ID
              </button>
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-3">
              <h6 className="text-lg font-semibold">Make a Call</h6>
              <input
                type="text"
                placeholder="ID to call"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
              />

              {callAccepted && !callEnded ? (
                <button
                  type="button"
                  onClick={leaveCall}
                  className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition-colors"
                >
                  <PhoneOff size={20} />
                  Hang Up
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => callUser(idToCall)}
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-colors"
                >
                  <Phone size={20} />
                  Call
                </button>
              )}
            </div>
          </div>
        </form>

        {/* Children below (like notifications or extra UI) */}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
