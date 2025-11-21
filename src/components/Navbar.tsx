import { assets } from "../assets/assets";
import { FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx32 cursor-pointer"
    >
      {/* <img src={assets.logo} alt="logo" className="w-32 sm:w-44" /> */}
      <div className="flex w-32 gap-2 sm:w-44">
        <FileText color="#5044e5" />
        <h1 className="font-semibold">Drafts-ai</h1>
      </div>
      <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-2 text-sm cursor-pointer rounded-full bg-primary text-white px-10 py-2.5"
      >
        Login
        <img src={assets.arrow} alt="arrow" className="w-3" />
      </button>
    </div>
  );
};

export default Navbar;
