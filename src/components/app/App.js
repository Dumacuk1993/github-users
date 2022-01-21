import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserCard from "../UserCard/UserCard";
import UserList from "../UsersList/UserList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />}></Route>
          <Route path="/:userLogin" element={<UserCard />}></Route>
          <Route path="*" element={<UserList />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
