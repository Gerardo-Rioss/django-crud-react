import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div>
        <Link to="/tasks">
        <h1>Tasks App</h1>
        </Link>
        <Link to="/task-create">Create Task</Link>
    </div>
  )
}
