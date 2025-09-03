import { useForm } from "react-hook-form";
import {
  createTask,
  deleteTask,
  updateTask,
  getTaskById,
} from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
      toast.success("Tarea actualizada exitosamente", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createTask(data);
      toast.success("Tarea creada exitosamente", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/tasks");
  });

  const handleDelete = async () => {
    const accepted = window.confirm("Esta segudo que desea eliminar?");
    if (accepted) {
      await deleteTask(params.id);
      toast.success("Tarea eliminada exitosamente", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
      navigate("/tasks");
    }
  };
  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const {
          data: { title, description },
        } = await getTaskById(params.id);
        setValue("title", title);
        setValue("description", description);
      }
    }
    loadTask();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
          className="bg-zinc-700 rounded-lg block w-full mb-3"
        />
        {errors.title && <span>title is required</span>}
        <textarea
          rows="3"
          placeholder="description"
          {...register("description", { required: true })}
          className="bg-zinc-700 rounded-lg block w-full mb-3"
        ></textarea>
        {errors.description && <span>description is required</span>}
          <button className="bg-indigo-500 p-2 rounded-lg block w-full mt-3">
            Save
          </button>
      </form>

        <div className="flex justify-end">
      {params.id && (
        <button
          className="bg-red-500 p-2 rounded-lg w-48 mt-3"
          onClick={handleDelete}
        >
          Delete
        </button>
      )}
        </div>
    </div>
  );
}
