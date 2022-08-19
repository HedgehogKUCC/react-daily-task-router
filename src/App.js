import './App.css';
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  Outlet,
  useNavigate,
  useParams,
} from 'react-router-dom';

const Home = () => {
  return <h1>Home Page</h1>;
}

const Register = () => {
  return <p>這是註冊頁面</p>;
};

const Login = () => {
  return <p>這是登入頁面</p>;
};

const Logout = () => {
  const navigate = useNavigate();

  const goHomePage = () => {
    navigate('/login');
  }

  return <button type="button" onClick={goHomePage}>登出</button>;
}

const Todo = () => {
  return <>
    <p>這是 Todo 頁面</p>
    <Logout />
  </>
};

const Post = () => {
  return <>
    <p>Post 頁面</p>
    <Outlet />
  </>;
}

const PostChild = () => {
  let params = useParams();
  return <p>Post ID: {params.postId}</p>
}

const NotFoundPage = () => {
  return <h1>Not Found Page！</h1>
}

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post/post123">
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/post" element={<Post />}>
            <Route path=":postId" element={<PostChild />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
