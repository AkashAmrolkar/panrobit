
import { Link } from 'react-router-dom';
import home from '../assets/home.png'
const Home = ({users}) => {
  return (
    <>
      <div className="w-full bg-cover bg-no-repeat wave-bg" style={{ backgroundImage: home }}>
      <div className="relative w-1/2 mx-auto shadow-sm h-2/5 bg-white border-transparent rounded-md overflow-scroll">
        <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold capitalize text-3xl text-black text-center py-20 bg-gray-300 w-full">Select an account</h2>
          <div className="acc-section w-full">
            <ul className=' px-5'>
            {
              users.map((user)=>{
                return( 
                  <li key={user.id} className="border-b-2 py-3 border-slate-400">
                    <Link to={`/profile/${user.id}`}className="flex gap-3">
                      <img src={user.profilepicture} className=" h-16 w-16 rounded-full" />
                      <p>{user.name}</p>
                    </Link>
                  </li>
                )
              })
            }
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
    
    
  )
}

export default Home