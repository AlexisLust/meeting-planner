import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function TimeCard({
  timecard: {
    id,
    name,
    time_one_start,
    time_one_end,
    time_two_start,
    time_two_end,
    time_three_start,
    time_three_end,
  },
  setIdSelectedCoworker,
  onArchiveTask,
  onPinTask,
}) {
  // var message = "";
  // var handled = 1;
  const [buttonText, setButtonText] = useState("Add to Meeting");
  const [buttonState, setbuttonState] = useState(true);
  const [effect, setEffect] = useState(false);

  function addedButton() {
    setButtonText("Added");
    setbuttonState(false);
    setEffect(true);
    setIdSelectedCoworker(id);
  }

  function removedButton() {
    setButtonText("Add to Meeting");
    setbuttonState(true);
    setEffect(true);
  }

  // message = "Added " + name + " to meeting";

  // const text = "Add To Meeting";
  // const [buttonText, setButtonText] = useState(text);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setButtonText(text);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, [buttonText]);

  // handled = handled * -1;
  // console.log(message);
  // console.log(handled);

  return (
    <div className="rounded-2xl min-h-96 w-96 bg-header-gray pb-2 max-w-xs ">
      <div className="rounded-2xl h-full bg-background-gray max-w-sm">
        <div className="rounded-t-2xl bg-header-gray h-25 w-full">
          <h4
            key={id}
            className="table-caption my-5 ml-12 text-2xl font-semibold font-sans tracking-tight text-blue-600"
          >
            {name}
          </h4>
        </div>
        <div className="flex flex-col flex-grow p-10 w-full">
          <div className="rounded-xl mb-3 mx-10 h-12 bg-item-gray grid place-items-center text-black ">
            <p className="text-sm font-semibold">
              {time_one_start} - {time_one_end}
            </p>
          </div>
          <div className="rounded-xl mb-3 mx-10 h-12 bg-item-gray grid place-items-center text-black">
            <p className="text-sm font-semibold">
              {time_two_start} - {time_two_end}
            </p>
          </div>
          <div className="rounded-xl mb-3 mx-10 h-12 bg-item-gray grid place-items-center text-black">
            <p className="text-sm font-semibold">
              {time_three_start} - {time_three_end}
            </p>
          </div>
          <div className="w-fit mt-auto">
            {buttonState ? (
              <button
                onClick={addedButton}
                className={`${
                  effect && "animate-wiggle"
                } rounded-xl h-12 w-full mt-10 px-4 py-2 text-sm text-blue-100 bg-dark-green hover:bg-light-green text-white shadow`}
                onAnimationEnd={() => setEffect(false)}
              >
                {buttonText}
              </button>
            ) : (
              <button
                onClick={removedButton}
                className={`${
                  effect && "animate-wiggle"
                } rounded-xl h-12 w-full mt-10 px-4 py-2 text-sm text-blue-100 bg-dark-green hover:bg-light-green text-white shadow`}
                onAnimationEnd={() => setEffect(false)}
              >
                {buttonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

TimeCard.propTypes = {
  /** Composition of the task */
  timecard: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.number.isRequired,
    /** Title of the task */
    name: PropTypes.string.isRequired,
  }),
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
};
