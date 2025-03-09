const Sidebar = () => {
  return (
    <aside className="hidden md:block w-64 bg-gray-800 text-white p-4 fixed h-full top-16">
      <ul className="space-y-4">
        <li>
          <a href="#" className="block p-2 hover:bg-gray-700">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 hover:bg-gray-700">
            Settings
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 hover:bg-gray-700">
            Profile
          </a>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;
