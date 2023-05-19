import { Routes, Route } from "react-router-dom";
import Login from "./pages/admin/login/login";
import Layout from "./pages/layout/layout";
import Home from "./pages/home/home";
import AdminLayout from "./pages/admin/layout/admin-layout";
import Notice from "./pages/admin/notices/notices";
import Events from "./pages/admin/events/events";
import Dashboard from "./pages/admin/dashboard/dashboard";
import Contacts from "./pages/admin/contacts/contacts";
import AddNotice from "./pages/admin/notices/add-notice";
import UpdateNotice from "./pages/admin/notices/update-notice";
import AddEvent from "./pages/admin/events/add-events";
import UpdateEvent from "./pages/admin/events/update-event";
import AddCourse from "./pages/admin/course/add-course/add-course";
import Courses from "./pages/admin/course/view-course/courses";
import CoursesView from "./pages/courses/courses-view";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import UserContacts from "./pages/contacts/Contacts";
function App() {
  useEffect(() => {
    AOS.init({
      // duration: 1000,
      // easing: "ease-in-out",
      // once: true,
    });
  }, []);

  return (
    // https://dribbble.com/shots/20476594-Lysena-Web-Site-Design-Landing-Page-Home-Page-UI
    // https://cdn.dribbble.com/users/7165248/screenshots/16022336/media/aa6d8b01cf5d8ea9b7d4c9fe7320e37f.mp4
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="contact-us" element={<UserContacts />} />
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="view-course" element={<CoursesView />} />
        </Route>
        {/* for admin */}
        <Route path="/admin/" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="notices" element={<Notice />} />
          <Route path="add-notices" element={<AddNotice />} />
          <Route path="update-notice/:id" element={<UpdateNotice />} />

          <Route path="events" element={<Events />} />
          <Route path="add-events" element={<AddEvent />} />
          <Route path="update-event/:id" element={<UpdateEvent />} />

          <Route path="course" element={<Courses />} />
          <Route path="add-course" element={<AddCourse />} />

          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
