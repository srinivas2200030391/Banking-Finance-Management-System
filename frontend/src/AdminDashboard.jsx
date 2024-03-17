import { ScopedCssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Layout from "./scenes1/layout";
import Dashboard from "./scenes1/dashboard";
import Products from "./scenes1/products";
import Customers from "./scenes1/customers/index";
import Transactions from "./scenes1/transactions";
import Geography from "./scenes1/geography";
import Overview from "./scenes1/overview";
import Daily from "./scenes1/daily";
import Monthly from "./scenes1/monthly";
import Breakdown from "./scenes1/breakdown";
import Admin from "./scenes1/admin";
import Performance from "./scenes1/performance";

function AdminDashboard() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <ScopedCssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/monthly" element={<Monthly />} />
            <Route path="/breakdown" element={<Breakdown />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/performance" element={<Performance />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default AdminDashboard;