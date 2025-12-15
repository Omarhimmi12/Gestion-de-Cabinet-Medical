import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './sidebar';

export default function Layout() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
