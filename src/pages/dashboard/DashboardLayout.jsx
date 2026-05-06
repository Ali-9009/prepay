import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <div className="py-12 px-4">
            <div className="max-w-6xl mx-auto flex gap-6 items-start">
                <Sidebar />

                <div className="flex-1 ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}