import React, { useContext, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const navigate = useNavigate();
  useEffect(()=> {
    document.title = "ProjectBuddies | Update Task"
  }, []);
  const task = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(task._id);
  const handleUpdateTask = (e) => {
    e.preventDefault();
    console.log("clicked");
    const form = e.target;
    const formData = new FormData(form);
    const updatedFormData = Object.fromEntries(formData.entries());
    console.log(updatedFormData);
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`https://b11-a10-server-side.vercel.app/tasks/${task._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Saved!", "", "success");
            console.log("Data After Update", data);
            navigate('/myPostedTasks');
          });
        
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <div className="mx-3 md:mx-14 lg:mx-24 mt-5 lg:mt-10">
      <div className="shadow-2xl rounded-lg p-4">
        <h1 className="text-2xl md:text-3xl text-center text-primary font-bold">
          Update Details
        </h1>
        <form
          onSubmit={handleUpdateTask}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          <fieldset className="fieldset rounded-box w-full p-4">
            <label className="label">Task Title</label>
            <input
              type="text"
              name="taskTitle"
              className="input w-full"
              defaultValue={task.taskTitle}
              placeholder="Enter The Title"
            />
          </fieldset>

          <fieldset className="fieldset rounded-box w-full p-4">
            <label className="label">Category</label>
            <select
              defaultValue={task.category}
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
            <input
              type="date"
              name="deadline"
              defaultValue={task.deadline}
              className="input w-full"
            />
          </fieldset>

          <fieldset className="fieldset rounded-box w-full p-4">
            <label className="label">Budget</label>
            <input
              type="text"
              name="budget"
              className="input w-full"
              defaultValue={task.budget}
              placeholder="Enter Your Budget"
            />
          </fieldset>

          <fieldset className="fieldset rounded-box w-full p-4">
            <label className="label">User Name(Read Only)</label>
            <input
              name="name"
              defaultValue={user.displayName}
              type="text"
              className="input w-full"
              placeholder="Enter Your Name"
              readOnly
            />
          </fieldset>

          <fieldset className="fieldset rounded-box w-full p-4">
            <label className="label">User Email(Read Only)</label>
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              className="input w-full"
              placeholder="Enter Your Email"
              readOnly
            />
          </fieldset>

          <fieldset className="fieldset rounded-box w-full p-4 md:col-span-2">
            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              className="input w-full"
              defaultValue={task.details}
              placeholder="Enter Details of Your Work"
            />
          </fieldset>

          <input
            className="btn mt-3 text-primary bg-transparent border-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-accent transition-all duration-300 ease-in-out md:col-span-2"
            type="submit"
            value="Update Your Work Infos"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
