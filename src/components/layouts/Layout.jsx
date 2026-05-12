function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="h-screen bg-gray-100">

      {/* ✅ NAVBAR */}
      <div className="fixed top-0 left-0 right-0 h-[70px] bg-white z-50 shadow">
        <WMSNavbar setCollapsed={setCollapsed} />
      </div>

      {/* ✅ SIDEBAR */}
      <div
        className={`fixed top-[70px] bottom-0 ${
          collapsed ? "w-[70px]" : "w-[260px]"
        } bg-white border-r`}
      >
        <Sidebar collapsed={collapsed} />
      </div>

      {/* ✅ MAIN CONTENT */}
      <div
        className={`
          pt-[70px]
          ${collapsed ? "pl-[70px]" : "pl-[260px]"}
          h-full overflow-auto
        `}
      >
        {children}
      </div>

    </div>
  );
}

export default Layout;
