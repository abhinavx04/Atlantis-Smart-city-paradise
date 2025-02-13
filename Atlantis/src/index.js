import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Error,
  Footer,
  Landing,
  Navbar,
  Announcements,
  Complaints,
  Suggestions,
  AdminComplaints,
  AdminSuggestions,
  AdminAnnouncements,
  HomeReservations,
  RestaurantReservations,
  TheatreReservations
} from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
const pages = [
  <Route key={1} path="/home" element={<><Navbar /><Home />  <Footer /> </>} />,
  <Route key={1} path="/home/announcements" element={<><Navbar /><Announcements />  <Footer />  </>} />,
  <Route key={1} path="/home/suggestions" element={<><Navbar /> <Suggestions /> <Footer /> </>} />,
  <Route key={1} path="/home/complaints" element={<><Navbar /> <Complaints /><Footer />  </>} />,
  <Route key={1} path="/home/home-reservations" element={<><Navbar /> <HomeReservations />  <Footer />  </>} />,
  <Route key={1} path="/home/restaurant-reservations" element={<><Navbar /> <RestaurantReservations />  <Footer />  </>} />,
  <Route key={1} path="/home/theatre-reservations" element={<><Navbar /> <TheatreReservations />  <Footer />  </>} />,
]

// localStorage.removeItem('user')
let user = localStorage.getItem('user')

const admin_pages = [
  <Route
    key={1}
    path="/home/admin/make-announcements"
    element={
      <>
        <Navbar /> <AdminAnnouncements /> <Footer />{' '}
      </>
    }
  />,
  <Route
    key={1}
    path="/home/admin/view-complaints"
    element={
      <>
        <Navbar /> <AdminComplaints /> <Footer />{' '}
      </>
    }
  />,
  <Route
    key={1}
    path="/home/admin/view-suggestions"
    element={
      <>
        <Navbar />
        <AdminSuggestions /> <Footer />{' '}
      </>
    }
  />,
]

function renderPage() {
  if (user !== 'null' && user !== null) {
    user = JSON.parse(user)
    console.log(user);
    if (user[0].fields.is_superuser) {
    return [admin_pages, ...pages]
    }
    else {
      return pages
    }
  }
}

const page = (
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      {renderPage()}
      <Route path="*" element={<><Navbar /><Error />  <Footer /></>} />
    </Routes>
  </Router >
);

root.render(page);