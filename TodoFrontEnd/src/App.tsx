import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRouter} />
    </div>
  );
};

export default App;

{
  /* <header className="bg-orange-500 ">
<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
  <div className="flex items-center">
    <img className="h-8 mr-3" src={logo} alt="Taskify" />
    <p className="text-white font-semibold text-xl"></p>
  </div>

  <div className="flex gap-[20px]">
    <button className="bg-gray-600 text-indigo-600 py-2 px-4 rounded-md text-[20px] h-[50px] w-[120px]">
      Sign Up
    </button>

    <button className="bg-gray-600 text-indigo-600 py-2 px-4 rounded-md text-[20px] h-[50px] w-[120px]">
      Login
    </button>
  </div>
</div> */
}
