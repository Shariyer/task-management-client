/** @format */

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
const MyTask = () => {
  const { data: allTasks = [], refetch } = useQuery({
    queryKey: ["allTasks"],
    queryFn: () =>
      fetch("http://localhost:5000/tasks").then((res) => res.json()),
  });
  console.log(allTasks);
  console.log(typeof allTasks);
  const handleDelete = (id) => {
    // console.log("Delete", id);
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 1) {
          toast.success("Deleted Successfully");
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };
  const handleEdit = (id) => {
    const confirmation = window.confirm("Are you Sure You want to edit?");
    if (confirmation) {
      const nDescription = prompt("Write new description");
      const task = {
        taskDescription: nDescription,
      };
      console.log(task);
      fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(task),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
    console.log("Edit", id);
  };
  return (
    <div>
      {allTasks?.map((task, i) => (
        <div
          className="bg-red-100 p-5 mb-5 rounded-2xl flex flex-col lg:flex-row md:flex-row justify-between items-center"
          key={i}
        >
          <div className="text-black text-xl">
            <h3 className="font-bold">Name:{task.taskName}</h3>
            <p>Description:{task.taskDescription}</p>
          </div>
          <div className="flex">
            <button
              onClick={() => handleDelete(task._id)}
              className="btn bg-red-800"
            >
              Delete
            </button>
            <button
              onClick={() => handleEdit(task._id)}
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
