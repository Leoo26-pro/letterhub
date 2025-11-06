const navbar = () => {
    return (
        <div className="navbar fixed w-full transition-all py-4">
            <div className="container mx-auto py-4">
                <div className="navbar-box flex items-center justify-between">
                    <div className="logo">
                        <h1 className="text-2xl text-sky-400 font-bold">
                            LetterHUB
                        </h1>
                    </div>
                    <ul className="flex lg:gap-12 md:static md:flex-row md:bg-transparent md:shadow-none md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed right-0 top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all">
                        <li>
                            <a href="#" className="font-medium opacity-75">
                                Beranda
                            </a>
                        </li>
                        <li>
                            <a href="#" className="font-medium opacity-75">
                                Tentang Kami
                            </a>
                        </li>
                        <li>
                            <a href="#" className="font-medium opacity-75">
                                Layanan
                            </a>
                        </li>
                    </ul>
                    <div className="social flex items-center gap-2">
                        <a href="#">
                            <i className="ri-account-circle-line text-3xl"></i>
                        </a>
                        <i className="ri-menu-3-line text-3xl md:hidden block"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default navbar;
