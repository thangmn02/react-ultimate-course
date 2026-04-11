import { NavLink, Outlet } from "react-router-dom";
import { invoiceData } from "./invoiceData";

export default function Invoices() {
  return (
    <div className="flex h-screen pt-16"> 

      <nav className="w-80 bg-white border-r border-gray-300 p-6 overflow-auto">
        <h2 className="mb-6 text-2xl font-bold">Invoices</h2>
        <ul className="space-y-3">
          {invoiceData.map((invoice) => (
            <li key={invoice.number}>
              <NavLink
                to={invoice.number.toString()}
                className={({ isActive }) =>
                  `block text-lg py-3 px-4 rounded-lg transition-all
                   ${isActive 
                     ? "text-red-600 font-semibold bg-red-50" 
                     : "text-gray-700 hover:bg-gray-100"}`
                }
              >
                {invoice.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}