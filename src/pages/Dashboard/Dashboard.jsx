import WMSNavbar from "../Navbar/WMSNavbar"
import WMSSidebar from "../Main Layout/WMSSidebar";

import CalendarCard from "./components/CalendarCard";
import Orders from "./components/Orders";
import Profit from "./components/Profit";
import PickListTable from "./components/PicklistTable";
import PreviousOrdersChart from './components/PreviousOrderChart';

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F4F5FA]">

      {/* NAVBAR */}
      <WMSNavbar />

      {/* BODY */}
      <div className="flex">

        {/* SIDEBAR */}
        <WMSSidebar />

        {/* CONTENT */}
        <main className="flex-1 p-6">

          {/* TOP SECTION */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            <CalendarCard />

            <Orders />

            <Profit />

          </div>

          {/* TABLE */}
          <div className="mt-6">
            <PickListTable />
          </div>

       {/* PickListChart */}
          <div className="mt-6">
            <PreviousOrdersChart />
          </div>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;