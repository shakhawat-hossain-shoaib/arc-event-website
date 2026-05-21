import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Layout } from "./Layout";
import { AdminLayout } from "./AdminLayout";
import { DashboardLayout } from "./DashboardLayout";
import Home from "./pages/Home";
import SegmentsPage from "./pages/SegmentsPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import AboutPage from "./pages/AboutPage";
import SponsorsPage from "./pages/SponsorsPage";
import PastEventsPage from "./pages/PastEventsPage";
import SchedulePage from "./pages/SchedulePage";
import FAQPage from "./pages/FAQPage";
import RegisterPage from "./pages/RegisterPage";
import DisabledRegistrationPage from "./pages/DisabledRegistrationPage";
import ClosedRegistrationPage from "./pages/ClosedRegistrationPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import MyEventsPage from "./pages/MyEventsPage";
import QRPassPage from "./pages/QRPassPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import CertificatesPage from "./pages/CertificatesPage";
import ProfilePage from "./pages/ProfilePage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminSegmentsPage from "./pages/admin/AdminSegmentsPage";
import AdminSchedulePage from "./pages/admin/AdminSchedulePage";
import AdminContentPage from "./pages/admin/AdminContentPage";
import AdminSettingsPage from "./pages/admin/AdminSettingsPage";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="segments" element={<SegmentsPage />} />
            <Route
              path="event/:id"
              element={<EventDetailsPage />}
            />
            <Route path="about" element={<AboutPage />} />
            <Route path="sponsors" element={<SponsorsPage />} />
            <Route
              path="past-events"
              element={<PastEventsPage />}
            />
            <Route path="schedule" element={<SchedulePage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route
              path="disable_reg"
              element={<DisabledRegistrationPage />}
            />
            <Route
              path="closed_reg"
              element={<ClosedRegistrationPage />}
            />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route
            path="/dashboard"
            element={<DashboardLayout />}
          >
            <Route index element={<DashboardPage />} />
            <Route path="events" element={<MyEventsPage />} />
            <Route path="qr-pass" element={<QRPassPage />} />
            <Route
              path="leaderboard"
              element={<LeaderboardPage />}
            />
            <Route
              path="certificates"
              element={<CertificatesPage />}
            />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="users" element={<AdminUsersPage />} />
            <Route
              path="segments"
              element={<AdminSegmentsPage />}
            />
            <Route
              path="schedule"
              element={<AdminSchedulePage />}
            />
            <Route
              path="content"
              element={<AdminContentPage />}
            />
            <Route
              path="settings"
              element={<AdminSettingsPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}