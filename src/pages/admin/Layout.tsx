import { assets } from "@/assets/assets";
import { Outlet, useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";
import Sidebar from "@/components/admin/Sidebar";
import { useAppContext } from "@/context/AppContext";

const Layout = () => {
  const { axios, setToken, navigate } = useAppContext();
  const logout = () => {
    localStorage.removeItem("token");
    axios.defaults.headers.common["Authorization"] = null;
    setToken(null);
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-between items-center py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200">
        {/* <img src={assets.logo} alt="logo" className="w-32 sm:w-44" /> */}
        <div
          className="flex w-32 gap-2 sm:w-44 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <FileText color="#5044e5" />
          <h1 className="font-semibold">Drafts-ai</h1>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-2 text-sm cursor-pointer rounded-full bg-primary text-white px-10 py-2.5"
        >
          Logout
          <img src={assets.arrow} alt="arrow" className="w-3" />
        </button>
      </div>
      <div className="flex h-[calc(100vh-70px)]">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
