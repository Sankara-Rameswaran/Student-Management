import { NavLink } from "react-router-dom";

function Header() {
  const baseStyle =
    "px-4 py-2 rounded-md text-sm font-medium transition duration-200";

  const activeStyle = "bg-blue-600 text-white shadow";
  const inactiveStyle =
    "text-gray-600 hover:text-blue-600 hover:bg-blue-50";

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Title */}
          <h1 className="text-xl font-semibold text-gray-800">
            MyApp
          </h1>

          {/* Navigation */}
          <nav className="flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/add"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              Add
            </NavLink>
             <NavLink
              to="/update"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              Update
            </NavLink>

            <NavLink
              to="/view"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              View
            </NavLink>

            <NavLink
              to="/delete"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              Delete
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
