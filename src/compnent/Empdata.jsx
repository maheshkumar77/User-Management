import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './Empdata.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiLoaderCircle } from "react-icons/bi";
const Empdata = () => {
  const [data, setData] = useState(null); // Initialize as null to handle loading state
  const [loading, setLoading] = useState(true); // State to track loading
  const [page, setPage] = useState(1); // State to track the current page
  const [resultsPerPage, setResultsPerPage] = useState(30); // State to track how many results per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=${resultsPerPage}&seed=abc`);
        setData(response.data.results); // Set the user data (the results array)
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false even if there is an error
      }
    };
    fetchData();
  }, [page, resultsPerPage]); // Dependency array ensures re-fetch when `page` or `resultsPerPage` change

  if (loading) {
    return <div className="text-center"><BiLoaderCircle/></div>;
  }

  if (!data || data.length === 0) {
    return <div className="text-center">No data available.</div>;
  }

  // Function to go to the previous page
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // Function to go to the next page
  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="main">
      {/* Outer container with 50% width */}
      <div className="ouytermain">
        <div className="innermain">
          {data.map((user, index) => (
            <div
              key={index}
              className="map"
            >
            <IoIosArrowRoundForward className=" text-2xl text-blue-400 animate-pulse"/>
              {/* User name */}
              <p className="para1">{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
              <p className="para2">
                <strong>Email:</strong> {user.email}
              </p>

              {/* Button */}
              <button className="mapbutton">
                {/* Passing the clicked user data via state */}
                <Link to="/mainpage" state={{ user: user }}>
                  View Result
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Buttons */}
      <div className="outer">
        <button
          onClick={prevPage}
          className="outerbutton1"
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          className="outerbutton1"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Empdata;
