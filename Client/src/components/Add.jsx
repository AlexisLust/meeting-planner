import axios from "axios";
import { useEffect, useState } from "react";

export default function Add() {
  const options = [
    { value: 0, label: "00:00" },
    { value: 1, label: "00:30" },
    { value: 2, label: "01:00" },
    { value: 3, label: "01:30" },
    { value: 4, label: "02:00" },
    { value: 5, label: "02:30" },
    { value: 6, label: "03:00" },
    { value: 7, label: "03:30" },
    { value: 8, label: "04:00" },
    { value: 9, label: "04:30" },
    { value: 10, label: "05:00" },
    { value: 11, label: "05:30" },
    { value: 12, label: "06:00" },
    { value: 13, label: "06:30" },
    { value: 14, label: "07:00" },
    { value: 15, label: "07:30" },
    { value: 16, label: "08:00" },
    { value: 17, label: "08:30" },
    { value: 18, label: "09:00" },
    { value: 19, label: "09:30" },
    { value: 20, label: "10:00" },
    { value: 21, label: "10:30" },
    { value: 22, label: "11:00" },
    { value: 23, label: "11:30" },
    { value: 24, label: "12:00" },
    { value: 25, label: "12:30" },
    { value: 26, label: "13:00" },
    { value: 27, label: "13:30" },
    { value: 28, label: "14:00" },
    { value: 29, label: "14:30" },
    { value: 30, label: "15:00" },
    { value: 31, label: "15:30" },
    { value: 32, label: "16:00" },
    { value: 33, label: "16:30" },
    { value: 34, label: "17:00" },
    { value: 35, label: "17:30" },
    { value: 36, label: "18:00" },
    { value: 37, label: "18:30" },
    { value: 38, label: "19:00" },
    { value: 39, label: "19:30" },
    { value: 40, label: "20:00" },
    { value: 41, label: "20:30" },
    { value: 42, label: "21:00" },
    { value: 43, label: "21:30" },
    { value: 44, label: "22:00" },
    { value: 45, label: "22:30" },
    { value: 46, label: "23:00" },
    { value: 47, label: "23:30" },
  ];

  const initialState = {
    name: null,
    time_one_start: "00:00",
    time_one_end: "00:00",
    time_two_start: "00:00",
    time_two_end: "00:00",
    time_three_start: "00:00",
    time_three_end: "00:00",
  };

  const [coworker, setCoworker] = useState(initialState);

  useEffect(() => {
    console.log(coworker);
  }, [coworker]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCoworker({ ...coworker, [name]: value });
  };

  function saveCoworker(e) {
    e.preventDefault();
    const {
      name,
      time_one_start,
      time_one_end,
      time_two_start,
      time_two_end,
      time_three_start,
      time_three_end,
    } = coworker;
    axios
      .post("/api/coworkers/add", {
        name: name,
        time_one_start: time_one_start,
        time_one_end: time_one_end,
        time_two_start: time_two_start,
        time_two_end: time_two_end,
        time_three_start: time_three_start,
        time_three_end: time_three_end,
      })
      .then((response) => {
        response.status;
        console.log(response.data);
      })
      .catch((err) => console.warn(err));
    window.location.href = "/";
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="mb-0 space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={coworker.name || ""}
                  onChange={handleInputChange}
                  className="focus:border-gray-500 focus:bg-white focus:ring-0"
                />
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-44 mr-2">
                <label
                  htmlFor="time_one_start"
                  className="block text-sm font-medium text-gray-700"
                >
                  1st Available Time Slot
                </label>
                <div className="mt-1">
                  <select
                    name="time_one_start"
                    id="time_one_start"
                    className="focus:border-gray-500 focus:bg-white focus:ring-0"
                    value={coworker.time_one_start}
                    onChange={handleInputChange}
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="w-44 ml-2">
                <label
                  htmlFor="time_one_end"
                  className="block text-sm font-medium text-gray-700"
                >
                  End
                </label>
                <div className="mt-1">
                  <select
                    name="time_one_end"
                    id="time_one_end"
                    value={coworker.time_one_end}
                    onChange={handleInputChange}
                    className="focus:border-gray-500 focus:bg-white focus:ring-0"
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-44 mr-2 ">
                <label
                  htmlFor="time_two_start"
                  className="block text-sm font-medium text-gray-700"
                >
                  2nd Available Time Slot
                </label>
                <div className="mt-1">
                  <select
                    name="time_two_start"
                    id="time_two_start"
                    value={coworker.time_two_start}
                    onChange={handleInputChange}
                    className="focus:border-gray-500 focus:bg-white focus:ring-0"
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="w-44 ml-2">
                <label
                  htmlFor="time_two_end"
                  className="block text-sm font-medium text-gray-700"
                >
                  End
                </label>
                <div className="mt-1">
                  <select
                    name="time_two_end"
                    id="time_two_end"
                    value={coworker.time_two_end}
                    onChange={handleInputChange}
                    className="focus:border-gray-500 focus:bg-white focus:ring-0"
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-44 mr-2 ">
                <label
                  htmlFor="time_three_start"
                  className="block text-sm font-medium text-gray-700"
                >
                  3rd Available Time Slot
                </label>
                <div className="mt-1">
                  <select
                    name="time_three_start"
                    id="time_three_start"
                    value={coworker.time_three_start}
                    onChange={handleInputChange}
                    className="focus:border-gray-500 focus:bg-white focus:ring-0"
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="w-44 ml-2">
                <label
                  htmlFor="time_three_end"
                  className="block text-sm font-medium text-gray-700"
                >
                  End
                </label>
                <div className="mt-1">
                  <select
                    name="time_three_end"
                    id="time_three_end"
                    value={coworker.time_three_end}
                    onChange={handleInputChange}
                    className="focus:border-gray-500 focus:bg-white focus:ring-0"
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={saveCoworker}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-skin-fill hover:bg-skin-button-accent-hover text-white shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
