import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";

const AddTask = () => {
  const { user } = useContext(AuthContext);

  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());
    console.log(newTask);

    fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    }).then(res=>res.json()).then(data=>{
        console.log("Data from Database", data);
    })
  };

  return (
    <div className="mx-3 md:mx-14 lg:mx-24 mt-5 lg:mt-10">
      <div className="shadow-2xl rounded-lg p-4">
        <h1 className="text-2xl md:text-3xl text-center text-primary font-bold">
          Add Your Task
        </h1>
        <form
          onSubmit={handleAddTask}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          <fieldset className="fieldset rounded-box w-full p-4">
            <label className="label">Task Title</label>
            <input
              type="text"
              name="taskTitle"
              className="input w-full"
              placeholder="Enter The Title"
            />
          </fieldset>

          <fieldset className="fieldset rounded-box w-full p-4">
            <label className="label">Category</label>
            <select
              defaultValue="Select Catergory of Task"
              name="category"
              className="select w-full"
            >
              <option className="text-xs" disabled={true}>
                Select Catergory of Task
              </option>
              <option className="text-xs">Web Development</option>
              <option className="text-xs">Web Design</option>
              <option className="text-xs">Writing</option>
              <option className="text-xs">Marketing</option>
              <option className="text-xs">Graphics Design</option>
            </select>
          </fieldset>

          <fieldset className="fieldset rounded-box w-full p-4">
            <label className="label">Deadline</label>
            <input type="date" name="deadline" className="input w-full" />
          </fieldset>

          <fieldset className="fieldset rounded-box w-full p-4">
            <label className="label">Budget</label>
            <input
              type="text"
              name="budget"
              className="input w-full"
              placeholder="Enter Your Budget"
            />
          </fieldset>

          <fieldset className="fieldset rounded-box w-full p-4">
            <label className="label">User Name(Read Only)</label>
            <input
              name="name"
              value={user.displayName}
              type="text"
              className="input w-full"
              placeholder="Enter Your Name"
            />
          </fieldset>

          <fieldset className="fieldset rounded-box w-full p-4">
            <label className="label">User Email(Read Only)</label>
            <input
              type="email"
              name="email"
              value={user.email}
              className="input w-full"
              placeholder="Enter Your Email"
            />
          </fieldset>

          <fieldset className="fieldset rounded-box w-full p-4 md:col-span-2">
            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              className="input w-full"
              placeholder="Enter Details of Your Work"
            />
          </fieldset>

          <input
            className="btn mt-3 text-primary bg-transparent border-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-accent transition-all duration-300 ease-in-out md:col-span-2"
            type="submit"
            value="Add Your Task"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
