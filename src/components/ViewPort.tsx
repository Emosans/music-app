import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons/faBackward";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ViewPort() {
  return (
    <div className="bg-slate-800 w-screen h-full md:h-[calc(100vh-80px)] ">
      <div className="">
        {/* first row*/}
        <div className="flex flex-col md:flex-row mt-10 space-y-4 md:space-x-10 justify-center items-center">
          <div className="shadow-md w-80 h-80 bg-gray-700 rounded-md flex flex-col items-center hover:shadow-xl">
            <img
              src="../assets/moonlight.png"
              className="w-56 h-56 mt-3 rounded-md"
            ></img>
            <p className="font-bold py-6 text-2xl text-white">
              Moonlight - Kali Uchis
            </p>
          </div>
          <div className="shadow-md w-80 h-80 bg-gray-700 rounded-md flex flex-col items-center hover:shadow-xl">
            <img
              src="../assets/pink+white.png"
              className="w-56 h-56 mt-3 rounded-md"
            ></img>
            <p className="font-bold py-6 text-2xl text-white">
              Pink+White - Frank Ocean
            </p>
          </div>
          <div className="shadow-md w-80 h-80 bg-gray-700 rounded-md flex flex-col items-center hover:shadow-xl">
            <img
              src="../assets/loversrock.png"
              className="w-56 h-56 mt-3 rounded-md"
            ></img>
            <p className="font-bold py-6 text-2xl text-white">
              Lover's Rock - TV Girl
            </p>
          </div>
          <div className="shadow-md w-80 h-80 bg-gray-700 rounded-md flex flex-col items-center hover:shadow-xl">
            <img
              src="../assets/Window.png"
              className="w-56 h-56 mt-3 rounded-md"
            ></img>
            <p className="font-bold py-6 text-2xl text-white">
              Window - Still Woozy
            </p>
          </div>
        </div>

        {/* second row*/}
        <div className="flex flex-col md:flex-row mt-10 space-y-4 md:space-x-10 justify-center items-center">
          <div className="shadow-md w-80 h-80 bg-gray-700 rounded-md flex flex-col items-center hover:shadow-xl">
            <img
              src="../assets/nosurprisesradiohead.png"
              className="w-56 h-56 mt-3 rounded-md"
            ></img>
            <p className="font-bold py-6 text-2xl text-white">
              No Surprises - Radiohead
            </p>
          </div>
          <div className="shadow-md w-80 h-80 bg-gray-700 rounded-md flex flex-col items-center hover:shadow-xl">
            <img
              src="../assets/romanticlovereyedress.png"
              className="w-56 h-56 mt-3 rounded-md"
            ></img>
            <p className="font-bold py-6 text-2xl text-white">
              Romantic Lover - Eyedress
            </p>
          </div>
          <div className="shadow-md w-80 h-80 bg-gray-700 rounded-md flex flex-col items-center hover:shadow-xl">
            <img
              src="../assets/goldenhour.png"
              className="w-56 h-56 mt-3 rounded-md"
            ></img>
            <p className="font-bold py-6 text-2xl text-white">
              Golden Hour - JVKE
            </p>
          </div>
          <div className="shadow-md w-80 h-80 bg-gray-700 rounded-md flex flex-col items-center hover:shadow-xl">
            <img
              src="../assets/telephonesvacations.png"
              className="w-56 h-56 mt-3 rounded-md"
            ></img>
            <p className="font-bold py-6 text-2xl text-white">
              Telephones - Vacations
            </p>
          </div>
        </div>

        {/* playing area */}
        <div className="shadow-md bg-gray-700 md:ml-10 ml-5 mt-10 h-40 w-[calc(100%-2rem)] md:h-36 md:w-[calc(100%-5rem)] rounded-md">
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col justify-center mt-2">
              <img
                src="../assets/moonlight.png"
                alt="Moonlight - Kali Uchis"
                className="flex-none w-32 h-32 rounded-md"
              ></img>
            </div>
            <div className="flex flex-col justify-center gap-5">
              <div className="flex space-x-10">
                <FontAwesomeIcon icon={faBackward} className="w-10 h-10" />
                <FontAwesomeIcon icon={faPlay} className="w-10 h-10" />
                <FontAwesomeIcon icon={faForward} className="w-10 h-10" />
              </div>
              <div className="w-full h-3 bg-gray-600 rounded-full overflow-hidden">
                <div className="h-full bg-white w-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPort;
