import React from "react";
import PropTypes from "prop-types";

import Window from "../../window/Window";

const Chat = ({ onClose }) => (
  <Window onClose={onClose} title="Messenger" icon="💬">
    <div className="flex flex-col md:flex-row leading-tight">
      <div className="bg-white m-1 p-2 md:p-4 border-4 shadow-inner md:max-w-xs">
        <button className="font-black" type="button">
          Friends
        </button>
        <ul>
          <li className="truncate">
            <button type="button" title="Online">
              🟢 bethG
            </button>{" "}
            <small>tune in nerds</small>
          </li>
          <li className="truncate">
            <button type="button" title="Offline">
              ⚪ manureboy
            </button>{" "}
            <small>studying :(</small>
          </li>
          <li className="truncate">
            <button type="button" title="Offline">
              ⚪ thuy_49
            </button>{" "}
            <small>real eyes realize real lies</small>
          </li>
        </ul>
      </div>
      <div className="flex-grow flex flex-col break-all sm:break-normal">
        <div className="bg-white m-1 m-1 p-2 md:p-4 border-4 shadow-inner text-2xl flex-grow">
          <p>
            <strong className="text-red-500">bethG:</strong>{" "}
            <span className="font-sans">my shows at 1 tune in!!</span>
          </p>
          <p>
            <strong className="text-blue-600">whatusername:</strong> i don't
            have a radio in my dorm yet :(
          </p>
          <p>
            <strong className="text-red-500">bethG:</strong>{" "}
            <span className="font-sans">k come to the station then</span>
          </p>
          <p>
            <strong className="text-red-500">bethG:</strong>{" "}
            <span className="font-sans">but u can buy one at spades</span>
          </p>
          <p>
            <strong className="text-red-500">bethG:</strong>{" "}
            <span className="font-sans">its like a hardware store</span>
          </p>
          <p>
            <strong className="text-red-500">bethG:</strong>{" "}
            <span className="font-sans">and also an electronics store</span>
          </p>
          <p>
            <strong className="text-red-500">bethG:</strong>{" "}
            <span className="font-sans">
              THE COMBINATION HARDWARE N ELECTORNICS STORE
            </span>
          </p>
          <p>
            <strong className="text-blue-600">whatusername:</strong> ????
          </p>
          <p>
            <strong className="text-red-500">bethG:</strong>{" "}
            <span className="font-sans">
              <button className="text text-blue-500 underline" type="button">
                https://www.youtube.com/watch?v=EQ8ViYIeH04
              </button>
            </span>
          </p>
          <p>
            <strong className="text-blue-600">whatusername:</strong> lol
          </p>
          <p>
            <strong className="text-blue-600">whatusername:</strong> i'm gonna
            listen to this later
          </p>
          <p>
            <strong className="text-blue-600">whatusername:</strong> and swing
            by the station now
          </p>
          <p>
            <strong className="text-red-500">bethG:</strong>{" "}
            <span className="font-sans">good moves</span>
          </p>
        </div>
        <div className="bg-gray-300 m-1 p-2 md:p-4 border-4 shadow-inner text-2xl">
          This chat is archived.{" "}
          <button className="text text-blue-500 underline" type="button">
            Read more...
          </button>
        </div>
      </div>
    </div>
  </Window>
);

Chat.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Chat;
