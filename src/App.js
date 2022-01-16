import { Routes,  Route, Navigate } from "react-router-dom";
import NotFound from './pages/Anonymous/NotFound';
import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Anonymous/HomePage";
import LoginPage from "./pages/Anonymous/LoginPage";
import LogoutPage from "./pages/Anonymous/LogoutPage";
import RegisterPage from "./pages/Anonymous/RegisterPage";
import UserDashboard from "./pages/User/UserDashboard";
import UserProfile from "./pages/User/UserProfile";
import UserProjects from "./pages/User/project/UserProjects";
import AddProject from "./pages/User/project/AddProject";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/project" element={<AddProject />} />
        <Route path="/user/projects" element={<UserProjects />} />
        
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        {/* <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
                  <Route
                    path=""
                    element={
                      <div className="centered">
                        <Link className="btn--flat" to={`comments`}>
                          Load Comments
                        </Link>
                      </div>
                    }
                  />
                  <Route path={`comments`} element={<Comments />} />
                </Route>
                <Route path="/new-quote" element={<NewQuote />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
