import { assets } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import { FileText } from "lucide-react";

const Navbar = () => {
  const { navigate, token } = useAppContext();
  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx32">
      {/* <img src={assets.logo} alt="logo" className="w-32 sm:w-44" /> */}
      <div
        onClick={() => navigate("/")}
        className="flex w-32 gap-2 sm:w-44 cursor-pointer"
      >
        <FileText color="#5044e5" />
        <h1 className="text-2xl font-semibold">Drafts-ai</h1>
      </div>
      <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-2 text-sm cursor-pointer rounded-full bg-primary text-white px-10 py-2.5"
      >
        {token ? "Dashboard" : "Login"}
        <img src={assets.arrow} alt="arrow" className="w-3" />
      </button>
    </div>
  );
};

export default Navbar;
