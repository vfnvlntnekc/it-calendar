import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth";
import Login from "../pages/Login";
import MainPage from "../pages/MainPage";
import AddTask from "./AddTask";
import AddProject from "./AddProject";
import AddNew from "../pages/AddNew";
import EditPage from "../pages/EditPage";
import AddStep from "./AddStep";
import EditTask from "./EditTask";
import EditStep from "./EditStep";
import EditProject from "./EditProject";
import EditProjectForm from "./EditProjectForm";
import EditStepForm from "./EditStepForm";
import DeletePage from "../pages/DeletePage";
import DeleteProject from "./DeleteProject";
import DeleteStep from "./DeleteStep";
import DeleteTask from "./DeleteTask";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/login" element={<Login />} />
      <Route path="/calendar" element={<MainPage />} />
      <Route path="/addProject" element={<AddProject />} />
      <Route path="/addTask" element={<AddTask />} />
      <Route path="/addStep" element={<AddStep />} />
      <Route path="/addNew" element={<AddNew />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="/editProject" element={<EditProject />} />
      <Route path="/editTask" element={<EditTask />} />
      <Route path="/editStep" element={<EditStep />} />
      <Route path="/editProject/:id" element={<EditProjectForm />} />
      <Route path="/editStep/:id/:step" element={<EditStepForm />} />
      <Route path="/delete" element={<DeletePage />} />
      <Route path="/deleteProject" element={<DeleteProject />} />
      <Route path="/deleteStep" element={<DeleteStep />} />
      <Route path="/deleteTask" element={<DeleteTask />} />

      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default AppRouter;
