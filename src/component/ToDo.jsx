import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";

const ToDo = ({ users }) => {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return <div>User not found.</div>;
  }

  const openModal = () => {
    console.log("Clicked");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-12 grid grid-cols-8">
      <div className=" min-h-screen col-span-2 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-3xl flex justify-start items-center">
        {/*
      
          <ul className="flex flex-col gap-4 justify-start items-start w-full px-8">
            <li className="text-slate-300 text-xl font-normal border-b-2 py-3 border-slate-400 w-full">Profile</li>
            <li className="text-slate-300 text-xl font-normal border-b-2 py-3 border-slate-400 w-full">Post</li>
            <li className="text-slate-300 text-xl font-normal border-b-2 py-3 border-slate-400 w-full">Gallery</li>
            <li className="text-slate-300 text-xl font-normal py-3 border-slate-400 w-full">ToDo</li>

          </ul>

      */} 

        <Navbar usrs={users} />
      </div>
      <div className="col-span-6">
        <div>
          <div className="flex justify-between px-3">
            <h2 className="text-black font-bold text-2xl">Profile</h2>
            <div className='relative' onClick={openModal}>
              <div className="flex gap-3 items-center cursor-pointer">
                <img src={user.profilepicture} className=" h-16 w-16 rounded-full" />
                <p>{user.name}</p>
              </div>
              <div className={`${isModalOpen? 'show-modal':'hide-modal'} absolute top-20 right-0 bg-white shadow-md border-transparent rounded-2xl p-5 flex flex-col gap-3`}>
                <div className="flex flex-col gap-3 items-center">
                  <img src={user.profilepicture} className=" h-16 w-16 rounded-full" />
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                </div>
                <button className=' bg-red-500 px-6 py-2 text-white rounded-2xl' onClick={closeModal}><Link to="/">Log Out</Link></button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <div className=' text-gray-300 text-6xl text-center capitalize font-extrabold'>Comming Soon</div>
        </div>
    </div> 
    </div>
  )
}

export default ToDo