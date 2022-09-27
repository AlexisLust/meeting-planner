import React, { useEffect, useState } from "react";
import Axios from "axios";
import TimeCard from "./components/TimeCard";

export default function App() {
  const [listOfCoworkers, setCoworkers] = useState([{}]);

  useEffect(() => {
    Axios.get("/api/coworkers").then((response) => {
      setCoworkers(response.data);
    });
    // fetch("/api/coworkers").then(
    //   response => response.json()
    // ).then(
    //   data => {
    //     setCoworkers(data)
    //   }
    // )
  }, []);

  return (
    <>
    <div className="w-full h-36 top-0 bg-dark-green "></div>
    <div className="flex justify-center w-full items-center" >
      <div className="p-6 space-x-12 -my-32">
        {listOfCoworkers.map((coworker) => {
          return (
              <div className="float-left">
              <TimeCard timecard={coworker} />
              </div>
          );
        })}
      </div>
      </div>
      
    </>
  );
}
