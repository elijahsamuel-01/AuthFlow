import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import bc from "../assets/GetStarted1.png";
import bc1 from "../assets/GetStarted2.jpg";
import bc2 from "../assets/GetStarted3.jpg";
import bc3 from "../assets/GetStarted4.jpg";
import bc4 from "../assets/GetStarted5.jpg";

export default function GetStarted() {
  return (
    <div className="bg-gray-100">
      <header className="bg-orange-500 h-[80px] w-full flex items-center ">
        <div className="w-full flex justify-between items-center">
          <div className="ml-20 flex items-center gap-[20px]">
            <div>
              <img className="h-[110px] w-[133px]" src={logo} alt="Taskify" />
            </div>
            <div className="text-[20px] font-semibold">Product</div>
            <div className="text-[20px] font-semibold">Pricing</div>
            <div className="text-[20px] font-semibold">EnterPrise</div>
            <div className="text-[20px] font-semibold">
              Resources and Support
            </div>
          </div>
          <div className="flex gap-[20px] items-center mr-20">
            <Link to="/la/landing-page">
              <button className="border-solid border-2 border-black text-black py-2 px-4 rounded-md text-[20px] h-[50px] w-[120px]">
                Sign Up
              </button>
            </Link>
            <Link to="/la/login">
              <button className="bg-black text-white py-2 px-4 rounded-md text-[20px] h-[50px] w-[120px]">
                Login
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <div className="bg-white py-12 h-[500px] flex items-center ">
          <div className="max-w-7xl ml-20 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">
              Streamline your workflow
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Task Manager helps you organize your tasks, track progress, and
              meet deadlines. Get more done the easy way.
            </p>
            <Link to="/landing-page">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-md">
                Start for Free
              </button>
            </Link>
          </div>
          {/* <div className="h-[200px] bg-white w-[180px]">Pic</div> */}
        </div>

        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl ml-20 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="rounded bg-white p-8 shadow">
                <h3 className="font-semibold mb-4">Task Kanban</h3>
                <p className="text-gray-600">
                  Visualize your tasks in an intuitive kanban board with columns
                  for To Do, In Progress and Complete.
                </p>
              </div>

              <div className="rounded bg-white p-8 shadow">
                <h3 className="font-semibold mb-4">Task Reminders</h3>
                <p className="text-gray-600">
                  Set due dates and reminders so you never miss an important
                  task again. Get notified across devices.
                </p>
              </div>

              <div className="rounded bg-white p-8 shadow">
                <h3 className="font-semibold mb-4">Progress Reports</h3>
                <p className="text-gray-600">
                  See how much work you have completed over time with detailed
                  graphs and progress reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-orange-500 py-12">
          <div className="max-w-7xl ml-20 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start organizing your tasks today
            </h2>

            <button className="bg-white hover:bg-gray-100 text-indigo-600 font-medium py-3 px-6 rounded-md">
              Start for Free
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-400">
          &copy; 2023 Task Manager
        </div>
      </footer>
    </div>
  );
}
