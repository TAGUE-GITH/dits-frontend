import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AdminLayout from "./components/admin/AdminLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Partners from "./pages/Partners";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import Contact from "./pages/Contact";
import Unsubscribe from "./pages/Unsubscribe";
import NotFound from "./pages/NotFound";
import Account from "./pages/Account";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Dashboard from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/AdminUsers";

export default function App() {
  return (
    <Routes>
      <Route path="/connexion" element={<Login />} />
      <Route path="/inscription" element={<Register />} />
      <Route path="/mot-de-passe-oublie" element={<ForgotPassword />} />
      <Route path="/reinitialiser-mot-de-passe" element={<ResetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route element={<ProtectedRoute admin />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="utilisateurs" element={<AdminUsers />} />
        </Route>
      </Route>

      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/realisations" element={<Projects />} />
        <Route path="/realisations/:id" element={<ProjectDetail />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/partenaires" element={<Partners />} />
        <Route path="/carrieres" element={<Careers />} />
        <Route path="/carrieres/:id" element={<JobDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletter/desabonnement" element={<Unsubscribe />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/mon-espace" element={<Account />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}