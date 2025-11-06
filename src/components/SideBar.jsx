import { useState } from "react";
import { Link } from "react-router-dom";

const sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const [activeMenu, setActiveMenu] = useState("beranda");
    return (
        <>
            {sidebarOpen && (
                <div
                    className="ml-64 fixed inset-0 bg-black opacity-50 z-40 transition-all"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
            <div
                className={`w-64 fixed h-full bg-slate-100 ${
                    sidebarOpen ? "left-0" : "-left-full"
                } transition-all `}
            >
                <div className="px-2 py-4">
                    <h1 className="text-2xl text-sky-500 font-bold text-center">
                        Menu
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="float-right text-gray-600 hover:text-red-500"
                        ></button>
                    </h1>
                </div>
                <hr />
                <ul className="px-5 py-8 flex flex-col gap-8">
                    <li
                        className={`py-3 flex items-center gap-2 hover:bg-slate-200 hover:rounded-2xl cursor-pointer ${
                            activeMenu === "beranda"
                                ? "bg-sky-100 text-sky-500 py-4 gap-2 rounded-2xl"
                                : "hover:text-sky-500"
                        }`}
                    >
                        <i
                            className={`ri-home-2-line text-3xl${
                                activeMenu === "beranda" ? "text-sky-500" : ""
                            }`}
                        ></i>
                        <Link
                            to="/"
                            className={`font-medium ${
                                activeMenu === "beranda"
                                    ? "text-sky-500 font-bold"
                                    : "opacity-75"
                            }`}
                            onClick={() => {
                                setActiveMenu("beranda");
                                setSidebarOpen(false);
                            }}
                        >
                            Beranda
                        </Link>
                    </li>
                    <li
                        className={`py-3 flex items-center gap-2 hover:bg-slate-200 hover:rounded-2xl cursor-pointer ${
                            activeMenu === "ajukan-surat"
                                ? "bg-sky-100 text-sky-500 rounded-2xl"
                                : "hover:text-sky-500"
                        }`}
                    >
                        <i
                            className={`ri-add-line text-3xl ${
                                activeMenu === "ajukan-surat"
                                    ? "text-sky-500"
                                    : ""
                            }`}
                        ></i>
                        <Link
                            to="/ajukan-surat"
                            className={`font-medium ${
                                activeMenu === "ajukan-surat"
                                    ? "text-sky-500 font-bold"
                                    : "opacity-75"
                            }`}
                            onClick={() => {
                                setActiveMenu("ajukan-surat");
                                setSidebarOpen(false);
                            }}
                        >
                            Ajukan Surat
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default sidebar;
