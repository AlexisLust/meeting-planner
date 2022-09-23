import React from 'react';
import PropTypes from 'prop-types';

export default function TimeCard({ timecard: { id, name, state }, onArchiveTask, onPinTask }) {
    return (
      <div className={`list-item ${state}`}>
        <label
          htmlFor="checked"
          aria-label={`archiveTask-${id}`}
          className="checkbox"
        >
          <input
            type="checkbox"
            disabled={true}
            name="checked"
            id={`archiveTask-${id}`}
            checked={state === "TASK_ARCHIVED"}
          />
          <span
            className="checkbox-custom"
            onClick={() => onArchiveTask(id)}
          />
        </label>
   
        <label htmlFor="name" aria-label={name} className="name">
          <input
            type="text"
            value={name}
            readOnly={true}
            name="name"
            placeholder="Input Name"
          />
        </label>
   
        {state !== "TASK_ARCHIVED" && (
          <button
            className="pin-button"
            onClick={() => onPinTask(id)}
            id={`pinTask-${id}`}
            aria-label={`pinTask-${id}`}
            key={`pinTask-${id}`}
          >
            <span className={`icon-star`} />
          </button>
        )}
      </div>
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