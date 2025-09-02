import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask ,getTaskById} from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

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
    if (params.id){
      await updateTask(params.id, data)
    }else{
      const res = await createTask(data);
    }
    navigate("/tasks");
  });

  const handleDelete= async()=>{
    const accepted = window.confirm("Esta segudo que desea eliminar?")
    if (accepted){
      await deleteTask(params.id)
      navigate("/tasks")
    }
  }
useEffect(()=>{
  async function loadTask(){
    if (params.id){
      const {data:{title, description}} = await getTaskById(params.id)
      setValue("title", title)
      setValue("description", description)
    }

  }
  loadTask()
},[])

  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>title is required</span>}
        <textarea
          rows="3"
          placeholder="description"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>description is required</span>}
        <button>Save</button>
      </form>

      {params.id && (<button onClick={handleDelete}>Delete</button>)}
    </div>
  );
}
