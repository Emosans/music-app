import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <>
      <div className="bg-black ml-0 text-white pt-10 w-80 flex flex-col calc(100vh-100px)">
        {/*main content*/}
        <div className="container mx-auto flex-grow space-y-5">
          <div className="flex justify-evenly items-center hover:bg-gray-900 hover:border-1 hover:rounded-md">
            <h1>
              <FontAwesomeIcon icon={faHeart} />
            </h1>
            <h1 className="text-2xl font-normal py-3 hidden md:block">
              Liked Songs
            </h1>
          </div>

          <div className="flex justify-evenly items-center hover:bg-gray-900 hover:border-1 hover:rounded-md">
            <h1>
              <FontAwesomeIcon icon={faBook} />
            </h1>
            <h1 className="text-2xl font-normal py-3 hidden md:block">
              Your Library
            </h1>
          </div>

          <div className="flex justify-evenly items-center hover:bg-gray-900 hover:border-1 hover:rounded-md">
            <h1>
              <FontAwesomeIcon icon={faPlay} />
            </h1>
            <h1 className="text-2xl font-normal py-3 hidden md:block">
              Recently Played
            </h1>
          </div>
        </div>

        {/*footer*/}
        <div className=" text-center">
          <div className="flex flex-row justify-center space-x-3">
            <h1>
              <FontAwesomeIcon icon={faCopyright} />
            </h1>
            <h1 className="font-normal">Copyright</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
