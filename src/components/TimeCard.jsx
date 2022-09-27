import React from "react";
import PropTypes from "prop-types";

export default function TimeCard({
  timecard: { name, time_one_start },
  onArchiveTask,
  onPinTask,
}) {
  return (
    <div className="rounded-2xl min-h-96 w-96 bg-header-gray pb-2 max-w-xs ">
      <div className="rounded-2xl h-full bg-background-gray max-w-sm">
        <div className="rounded-t-2xl bg-header-gray h-25 w-full">
          <h4 className="table-caption my-5 ml-12 text-2xl font-semibold font-sans tracking-tight text-blue-600">
            {name}
          </h4>
        </div>
        <div className="flex flex-col flex-grow p-10 w-full">
            <div className="rounded-xl mb-3 mx-10 h-12 bg-item-gray grid place-items-center text-black "><p className="text-sm font-semibold">{time_one_start}- 9:00</p></div>
            <div className="rounded-xl mb-3 mx-10 h-12 bg-item-gray grid place-items-center text-black"><p className="text-sm font-semibold">10:30 - 16:00</p></div>
            <div className="rounded-xl mb-3 mx-10 h-12 bg-item-gray grid place-items-center text-black"><p className="text-sm font-semibold">16:30 - 17:00</p></div>
          <div className="w-fit mt-auto">
            <button className="rounded-xl h-12 w-full mt-10 px-4 py-2 text-sm text-blue-100 bg-dark-green text-white shadow">
              Add to meeting
            </button>
          </div>
        </div>
      </div>
    </div>

    // <div className={`list-item ${state}`}>
    //   <label
    //     htmlFor="checked"
    //     aria-label={`archiveTask-${id}`}
    //     className="checkbox"
    //   >
    //     <input
    //       type="checkbox"
    //       disabled={true}
    //       name="checked"
    //       id={`archiveTask-${id}`}
    //       checked={state === "TASK_ARCHIVED"}
    //     />
    //     <span
    //       className="checkbox-custom"
    //       onClick={() => onArchiveTask(id)}
    //     />
    //   </label>

    //   <label htmlFor="name" aria-label={name} className="name">
    //     <input
    //       type="text"
    //       value={name}
    //       readOnly={true}
    //       name="name"
    //       placeholder="Input Name"
    //     />
    //   </label>

    //   {state !== "TASK_ARCHIVED" && (
    //     <button
    //       className="pin-button"
    //       onClick={() => onPinTask(id)}
    //       id={`pinTask-${id}`}
    //       aria-label={`pinTask-${id}`}
    //       key={`pinTask-${id}`}
    //     >
    //       <span className={`icon-star`} />
    //     </button>
    //   )}
    // </div>
  );
}

TimeCard.propTypes = {
  /** Composition of the task */
  timecard: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.string.isRequired,
    /** Title of the task */
    name: PropTypes.string.isRequired,
    /** Current state of the task */
    state: PropTypes.string.isRequired,
  }),
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
};
