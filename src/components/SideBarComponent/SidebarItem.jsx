function SidebarItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition
        ${active ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

export default SidebarItem;