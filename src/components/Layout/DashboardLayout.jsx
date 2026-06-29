import Sidebar from "./Sidebar";
import Header from "./Header";
import "./DashboardLayout.css";

const DashboardLayout = ({
  children,
  onRefresh,
  onReset,
}) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <Header
          onRefresh={onRefresh}
          onReset={onReset}
        />

        <main className="dashboard-main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;