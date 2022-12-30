/** @format */

import React from "react";

const Add = () => {
  const handleAddTask = (event) => {
    event.preventDefault();
    const form = event.target;
    const taskName = form.name.value;
    const taskDescription = form.description.value;
    const task = { taskName, taskDescription };
    console.log("task", task);
    // console.log(taskDescription, taskName);
    fetch("https://task-server-zeta.vercel.app/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleAddTask} className="w-11/12 mx-auto">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Add your Task</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Enter Task Name"
            className="input input-bordered"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label"></label>
        <label className="input-group">
          <input
            type="text"
            name="description"
            placeholder="Enter Task Description"
            className="input input-bordered"
          />
        </label>
      </div>
      <div className=" ">
        <input className="btn btn-accent mt-3" type="submit" value="Add Task" />
      </div>
    </form>
  );
};

export default Add;
