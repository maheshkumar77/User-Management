import { useLocation } from "react-router-dom";
import "./mainpage.css"
const MainPage = () => {
  const location = useLocation();
  const { user } = location.state || {}; // Get the user data from state

  return (
    <div className="bg-slate-600 h-screen w-full">
      <h1 className="text-center text-white text-3xl mb-6 w-full">User Data</h1>
      {user ? (
        <div className="xx flex flex-col md:flex-row justify-between items-center gap-10 p-4">
          <div className="xxx flex justify-start items-start w-full md:w-1/2 h-[90%]">
            <img 
              src={user.picture.large} 
              alt={`${user.name.first} ${user.name.last}`} 
              className="h-full w-full object-contain rounded-lg"
            />
          </div>
          <div className="xxxx flex flex-col justify-evenly items-start w-full md:w-1/2 text-white">
            <h2 className="text-2xl font-semibold">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Phone No.:</strong> {user.phone}</p>
            <p><strong>Email:</strong> {user.email}</p>
            {/* Add other user data if needed */}
          </div>
        </div>
      ) : (
        <p className="text-white text-center">No user data available.</p>
      )}
    </div>
  );
};

export default MainPage;
