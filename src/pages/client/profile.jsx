import { useState } from "react";
import Sidebar from "../../features/profile/components/sideBar";
import ProfileForm from "../../features/profile/components/profile";
import BillingForm from "../../features/profile/components/BillingForm";


export default function Profile() {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <main className="p-5 grid grid-cols-1 lg:grid-cols-4 gap-10 my-10">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <article className="p-0 md:p-5 lg:col-span-3" aria-label="Main content">
        {activeSection === "profile" && <ProfileForm />}
        {activeSection === "billing" && <BillingForm />}
      </article>
    </main>
  );
}
