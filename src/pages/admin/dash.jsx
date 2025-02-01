import AdminSideBar from "../../features/admin/components/adminSideBar";
import { useState } from "react";
import UsersManagment from "./usersManagment";
import ProductManagement from "./productManagment";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <main className="p-2 grid grid-cols-1 lg:grid-cols-4 gap-5 my-0 relative">
      {/* Sidebar */}
      <AdminSideBar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <article className="p-0 md:p-5 lg:col-span-3" aria-label="Main content">
        {/* Dashboard Section */}
        {activeSection === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-10 bg-slate-200 rounded shadow-md hover:bg-slate-300 transition-all">
              <h3 className="text-lg font-bold">Total Products</h3>
              <p className="text-2xl font-semibold">20</p>
            </div>

            <div className="p-10 bg-slate-200 rounded shadow-md hover:bg-slate-300 transition-all">
              <h3 className="text-lg font-bold">Total Orders</h3>
              <p className="text-2xl font-semibold">45</p>
            </div> 

            <div className="p-10 bg-slate-200 rounded shadow-md hover:bg-slate-300 transition-all">
              <h3 className="text-lg font-bold">Total Customers</h3>
              <p className="text-2xl font-semibold">15git  </p>
            </div>
          </div>
        )}

        {/* Customer Management Section */}
        {activeSection === "customerManagement" && (
        <UsersManagment/>
        )}



        {/* Animal Management Section */}
        {activeSection === "productManagement" && (
          <ProductManagement/>
        )}

        {/* Settings Section */}
        {activeSection === "settings" && (
          <div>
            <h2 className="text-2xl font-bold">Settings</h2>
            <p>Configure your shop settings here.</p>
          </div>
        )}
      </article>
    </main>
  );
}
