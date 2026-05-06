import WMSNavbar from "../Navbar/WMSNavbar";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <WMSNavbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>
      </div>
    </div>
  );
}

export default Dashboard;