import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-6">Main Content</div>
    </div>
  );
}

export default Dashboard;