import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import UserProfile from './component/UserProfile';
import Home from './component/Home';
import Post from './component/Post';
import Gallery from './component/Gallery';
import ToDo from './component/ToDo'
import "./App.css";


const App = () => {
  const url = 'https://panorbit.in/api/users.json';
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => setUsers(d.users))
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home users={users} />} />
          <Route path="/profile/:id" element={<UserProfile users={users} />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/gallery/:id" element={<Gallery />} />
          <Route path="/todo/:id" element={<ToDo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
