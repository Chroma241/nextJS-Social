import Story from "./Story";
import storiesList from "./storiesList";
import Script from "next/script";

const Stories = () => {
    return (
        <div className="flex w-full h-52 bg-blue-200">
            <div className="w-2/12">
               <div>
                <h1>Add to story</h1>
               </div>
            </div>
            <div className="w-10/12 flex gap-3 overflow-x-auto">
                <div id="stories"></div>
            </div>

        </div>
    );
}

export default Stories;
