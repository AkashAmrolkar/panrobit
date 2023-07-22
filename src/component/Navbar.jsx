import { Link, NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom';
const Navbar = ({usrs}) => {
  const { id } = useParams();
  const user = usrs.find((user) => user.id === parseInt(id));
  return (
    <div>
    <div className=" min-h-screen col-span-2 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-3xl flex justify-start items-center">
    <ul className="flex flex-col gap-4 justify-start items-start w-full px-8">
      <li className="text-slate-300 text-xl font-normal border-b-2 py-3 border-slate-400 w-full"> <NavLink to={`/profile/${user.id}`} > Profile </NavLink></li>
      <li className="text-slate-300 text-xl font-normal border-b-2 py-3 border-slate-400 w-full"><NavLink to={`/post/${user.id}`} > Post </NavLink></li>
      <li className="text-slate-300 text-xl font-normal border-b-2 py-3 border-slate-400 w-full"><NavLink to={`/gallery/${user.id}`} > Gallery </NavLink></li>
      <li className="text-slate-300 text-xl font-normal py-3 border-slate-400 w-full"><NavLink to={`/todo/${user.id}`} > ToDo </NavLink></li>

    </ul>
</div>
    </div>
  )
}

export default Navbar