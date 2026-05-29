import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <div className="flex items-center justify-between px-10 py-6 border-b border-white/10 bg-black text-white">

      <Link to="/dashboard">

        <h1 className="text-3xl font-bold">

          HireLens AI

        </h1>

      </Link>

      <div className="flex items-center gap-6">

        <Link to="/dashboard">

          Dashboard

        </Link>

        <Link to="/history">

          History

        </Link>
        <Link to="/chatbot">

        <button>

        AI Chat

        </button>

        </Link>

        <button

          onClick={logout}

          className="bg-red-500 px-4 py-2 rounded-xl"

        >

          Logout

        </button>

      </div>

    </div>

  );

};

export default Navbar;