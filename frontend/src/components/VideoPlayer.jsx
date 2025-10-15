import React, { useContext } from "react";
import { SocketContext } from "../Context";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-6">
      {/* My Video */}
      {(
        <div className="bg-white rounded-2xl shadow-lg p-4 w-full md:w-1/2">
          <div className="flex flex-col items-center">
            <h5 className="text-xl font-semibold mb-2">{name || "Name"}</h5>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className="rounded-lg w-full max-h-[300px] object-cover border border-gray-200"
            />
          </div>
        </div>
      )}

      {/* User Video */}
      {callAccepted && !callEnded && (
        <div className="bg-white rounded-2xl shadow-lg p-4 w-full md:w-1/2">
          <div className="flex flex-col items-center">
            <h5 className="text-xl font-semibold mb-2">{call.name || "Name"}</h5>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className="rounded-lg w-full max-h-[300px] object-cover border border-gray-200"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
