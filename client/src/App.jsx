import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home.jsx";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyTrainer from "./pages/ApplyTrainer";
import Notifications from "./pages/Notifications";
import UsersList from "./pages/Admin/UsersList";
import TrainersList from "./pages/Admin/TrainersList";
import TrainerProfile from "./pages/Trainer/TrainerProfile";
import UserProfile from "./pages/User/UserProfile";
import BookAppoint from "./pages/BookAppointment";
import Appointments from "./pages/Appointments";
import UserList from "./pages/Trainer/UserList";
import TrainerAppointments from "./pages/Trainer/TrainerAppointments";
import ChatLists from "./pages/ChatList";
import TrainerChat from "./pages/Trainer/TrainerChat";
import Contact from "./components/Contact";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <BrowserRouter>
      {loading && (
        <div className="spinner-parent">
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/apply-trainer"
          element={
            <ProtectedRoute>
              <ApplyTrainer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/userslist"
          element={
            <ProtectedRoute>
              <UsersList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/trainerslist"
          element={
            <ProtectedRoute>
              <TrainersList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trainer/userslist"
          element={
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trainer/profile/:userId"
          element={
            <ProtectedRoute>
              <TrainerProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/profile/:userId"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/book-appointment/:trainerId"
          element={
            <ProtectedRoute>
              <BookAppoint />
            </ProtectedRoute>
          }
        />
        <Route
          path="/appointments"
          element={
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trainer/appointments"
          element={
            <ProtectedRoute>
              <TrainerAppointments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chatLists"
          element={
            <ProtectedRoute>
              <ChatLists />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trainer/chatLists"
          element={
            <ProtectedRoute>
              <TrainerChat />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
