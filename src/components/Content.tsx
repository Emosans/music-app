import Sidebar from "./Sidebar";
import ViewPort from "./ViewPort";

function Content(){
    return (
      <div className="flex flex-row">
        <Sidebar />
        <ViewPort />
      </div>
    );
}

export default Content