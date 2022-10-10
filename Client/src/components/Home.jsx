import React, { useEffect, useState } from "react";
import axios from "axios";
import TimeCard from "./TimeCard";

export default function Home({}) {
  const [listOfCoworkers, setCoworkers] = useState([{}]);

  var coworker;
  const [message, setMessage] = useState();
  const [theme, setTheme] = useState("");
  const [listOfSelectedCoworkers, setListOfSelectedCoworkers] = useState([]);

  useEffect(() => {
    axios.get("/api/coworkers").then((response) => {
      setCoworkers(response.data);
    });
  }, []);

  useEffect(() => {
    scheduleApi();
  }, [listOfSelectedCoworkers]);

  const scheduleApi = () => {
    console.log("Scheduling with api " + listOfSelectedCoworkers);
    axios
      .post("/api/coworkers", { listCoworkers: listOfSelectedCoworkers })
      .then((response) => {
        response.status;
        setMessage(response.data);
      })
      .catch((err) => console.warn(err));
  };
  // useEffect(scheduleApi, []);

  //We receive an id from the timecard that is to be removed from the calculation, then slice the array,
  //updating the schedule when the list being chaged triggers it
  function removeCoworker(idToRemove) {
    const index = listOfSelectedCoworkers.findIndex(
      ({ id }) => id === idToRemove
    );
    if (index !== -1) {
      setListOfSelectedCoworkers([
        ...listOfSelectedCoworkers.slice(0, index),
        ...listOfSelectedCoworkers.slice(index + 1),
      ]);
    }
  }

  function changeTheme() {
    if (theme == "") {
      setTheme("theme-navy");
    } else if (theme == "theme-navy") {
      setTheme("theme-neon");
    } else {
      setTheme("");
    }
  }

  return (
    <>
      {/* <img
        className="w-full absolute z-0"
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="example"
      /> */}
      <div className={theme}>
        <div className=" w-full h-36 top-0 bg-skin-fill"></div>
        <div className=" w-full -mt-32  font-nunito flex flex-col items-center">
          {/* <div className=" space-x-12 flex flex-wrap md:flex-row  my-6  justify-center"> */}
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-2">
            {listOfCoworkers.map((coworker, index) => {
              return (
                <div key={index} className="m-6">
                  <TimeCard
                    timecard={coworker}
                    setListOfSelectedCoworkers={setListOfSelectedCoworkers}
                    removeCoworker={removeCoworker}
                  />
                </div>
              );
            })}
          </div>
          {/* <div className="fixed bottom-0 mb-20">
          <p className="m-6">
            {coworker === undefined
              ? ""
              : `Added ` + coworker.name + ` to the meeting`}
          </p>
        </div> */}
        </div>

        <div className="flex justify-center items-center">
          {message === undefined ? (
            <div></div>
          ) : (
            <div className="rounded-xl my-10 h-20 bg-header-gray ">
              <div className="rounded-xl p-6 bg-background-gray ">
                <p>{message}</p>
                {""}
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-end  ">
          <button
            onClick={changeTheme}
            className={`bottom-0 absolute m-12 rounded-xl h-12 w-32 mt-10 px-4 py-2 text-sm text-blue-100 bg-skin-fill hover:bg-skin-button-accent-hover text-white shadow`}
          >
            Change Theme
          </button>
        </div>
      </div>
    </>
  );
}
