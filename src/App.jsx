import React, { useEffect, useState } from "react";
import Axios from "axios";
import TimeCard from "./components/TimeCard";

export default function App() {
  const [listOfCoworkers, setCoworkers] = useState([{}]);

  const [idSelectedCoworker, setIdSelectedCoworker] = useState();
  const [message, setMessage] = useState();

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
      {/* <img
        className="w-full absolute z-0"
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="example"
      /> */}
      <div className="absolute w-full h-36 top-0 bg-dark-green z-10 "></div>
      <div className="absolute top-36 flex justify-center w-full items-center z-20">
        <div className="p-6 space-x-12 -my-32">
          {listOfCoworkers.map((coworker) => {
            return (
              <div className="float-left">
                <TimeCard
                  timecard={coworker}
                  setIdSelectedCoworker={setIdSelectedCoworker}
                />
              </div>
            );
          })}
        </div>
        <div className="fixed bottom-0 mb-20 ">
          <p>
            {console.log("id: "+ idSelectedCoworker)}
            {(idSelectedCoworker == undefined)
              ? ""
              : `Added `+listOfCoworkers[idSelectedCoworker].name + ` to the meeting`}
            
          </p>
        </div>
      </div>
    </>
  );
}
