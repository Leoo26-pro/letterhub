import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const navbar = ({ setSidebarOpen }) => {
    const [tampil, setTampil] = useState(false);
    const [scroll, setScroll] = useState(false);
    const location = useLocation();

    const isAjukanSuratPage = location.pathname === "/ajukan-surat";

    const buttonClick = () => {
        setSidebarOpen((prev) => !prev);
    };

    const handleClick = () => {
        setTampil(!tampil);
    };

    let menuActive = tampil ? "right-0" : "-right-full";

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 5) {
                setScroll(true);
                setTampil(false);
                setSidebarOpen(false);
            } else {
                setScroll(false);
            }
        });
    });

    let scrollActive = scroll ? "py-0 bg-white shadow rounded" : "py-2";

    return (
        <div
            className={`navbar fixed w-full transition-all shadow bg-transparent ${scrollActive} `}
        >
            <div className="container mx-auto py-4">
                <div className="navbar-box flex items-center justify-between">
                    <div className="logo flex items-center gap-2">
                        <a href="#">
                            <i
                                className="ri-menu-line text-3xl"
                                onClick={buttonClick}
                            ></i>
                        </a>

                        <h1 className="sm:text-2xl text-xl text-sky-400 font-bold">
                            LetterHUB
                        </h1>
                    </div>

                    {!isAjukanSuratPage && (
                        <ul
                            className={`flex lg:gap-12 md:static md:flex-row md:bg-transparent md:shadow-none md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}
                        >
                            <li className="flex items-center gap-2">
                                <i className="ri-home-2-line text-3xl md:hidden block"></i>
                                <a
                                    href="#home"
                                    className="font-medium opacity-75"
                                >
                                    Beranda
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="ri-information-2-line text-3xl md:hidden block"></i>
                                <a
                                    href="#about"
                                    className="font-medium opacity-75"
                                >
                                    Tentang Kami
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="ri-function-add-line text-3xl md:hidden block"></i>
                                <a
                                    href="#services"
                                    className="font-medium opacity-75"
                                >
                                    Layanan
                                </a>
                            </li>
                        </ul>
                    )}

                    <div className="social flex items-center gap-2">
                        <a href="#">
                            <i className="ri-account-circle-line text-4xl"></i>
                        </a>
                        {!isAjukanSuratPage && (
                            <i
                                className="ri-menu-3-line text-3xl md:hidden block"
                                onClick={handleClick}
                            ></i>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default navbar;
