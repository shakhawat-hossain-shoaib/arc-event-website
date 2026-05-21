import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
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

// Admin Pages
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminSegmentsPage from "./pages/admin/AdminSegmentsPage";
import AdminSchedulePage from "./pages/admin/AdminSchedulePage";
import AdminContentPage from "./pages/admin/AdminContentPage";
import AdminSettingsPage from "./pages/admin/AdminSettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "segments", Component: SegmentsPage },
      { path: "event/:id", Component: EventDetailsPage },
      { path: "about", Component: AboutPage },
      { path: "sponsors", Component: SponsorsPage },
      { path: "past-events", Component: PastEventsPage },
      { path: "schedule", Component: SchedulePage },
      { path: "faq", Component: FAQPage },
      { path: "register", Component: RegisterPage },
      { path: "disable_reg", Component: DisabledRegistrationPage },
      { path: "closed_reg", Component: ClosedRegistrationPage },
      { path: "login", Component: LoginPage },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "events", Component: MyEventsPage },
      { path: "qr-pass", Component: QRPassPage },
      { path: "leaderboard", Component: LeaderboardPage },
      { path: "certificates", Component: CertificatesPage },
      { path: "profile", Component: ProfilePage },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboardPage },
      { path: "users", Component: AdminUsersPage },
      { path: "segments", Component: AdminSegmentsPage },
      { path: "schedule", Component: AdminSchedulePage },
      { path: "content", Component: AdminContentPage },
      { path: "settings", Component: AdminSettingsPage },
    ],
  },
]);
