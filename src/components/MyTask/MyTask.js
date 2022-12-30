/** @format */

import React from "react";
import { useQuery } from "@tanstack/react-query";
const MyTask = () => {
  const { data: allTasks = [] } = useQuery({
    queryKey: ["allTasks"],
    queryFn: () =>
      fetch("http://localhost:5000/tasks").then((res) => res.json()),
  });
  const handleDelete = (id) => {
    console.log("Delete", id);
  };
  const handleEdit = (id) => {
    console.log("Edit", id);
  };
  return (
    <div>
      {allTasks.map((x, i) => (
        <div
          className="bg-red-100 p-5 mb-5 rounded-2xl flex flex-col lg:flex-row md:flex-row justify-between items-center"
          key={i}
        >
          <div className="text-black text-xl">
            <h3 className="font-bold">Name:{x.taskName}</h3>
            <p>Description:{x.taskDescription}</p>
          </div>
          <div className="flex">
            <button
              onClick={() => handleDelete(x._id)}
              className="btn bg-red-800"
            >
              Delete
            </button>
            <button
              onClick={() => handleEdit(x._id)}
              className="btn bg-green-800"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyTask;
