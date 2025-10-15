import React, { useContext } from "react";
import { PhoneIncoming } from "lucide-react"; // nice modern icon
import { SocketContext } from "../Context";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  if (!call.isReceivingCall || callAccepted) return null;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white border border-gray-300 rounded-xl shadow-md p-4 w-full md:w-[500px] mx-auto mt-6">
      <div className="flex items-center gap-3 mb-3 md:mb-0">
        <PhoneIncoming size={24} className="text-green-600" />
        <h1 className="text-lg font-semibold">{call.name || "Someone"} is calling...</h1>
      </div>

      <button
        onClick={answerCall}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors w-full md:w-auto"
      >
        Answer
      </button>
    </div>
  );
};

export default Notifications;
