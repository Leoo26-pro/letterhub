import BerandaImage from "../assets/image/beranda.svg";
import TentangImage from "../assets/image/tentang.svg";
import { Link } from "react-router-dom";

const homepage = () => {
    return (
        <div className="homepage pb-10">
            <div className="container mx-auto px-4">
                <div
                    className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-10 pt-28"
                    id="home"
                >
                    <div className="box">
                        <h1 className="lg:text-5xl/tight text-3xl mb-5 font-bold text-sky-400 underline">
                            LetterHUB
                        </h1>
                        <p className="text-base/8 mb-7">
                            Lelah membuka belasan link Simaster dan portal
                            fakultas hanya untuk mengurus satu surat? LetterHub
                            UGM memecahkan masalah fragmentasi ini. Kami adalah
                            dashboard agregator terpadu yang menyatukan semua
                            status pengajuan surat Anda dalam satu tampilan yang
                            bersih, modern, dan responsif.
                        </p>
                        <a
                            href="#about"
                            className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full"
                        >
                            Tentang Kami <i className="ri-eye-line ms-1"></i>
                        </a>
                    </div>
                    <div className="box">
                        <img
                            src={BerandaImage}
                            alt="Beranda Image"
                            className="lg:w-[500px] w-[400px] mx-auto md:m-0 "
                        />
                    </div>
                </div>
                <div
                    className="about grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:pt-20 pt-32"
                    id="about"
                >
                    <div className="box md:order-1 order-2">
                        <img
                            src={TentangImage}
                            alt="Tentang Image"
                            className="lg:w-[500px] w-[400px] md:m-0 mx-auto"
                        />
                    </div>
                    <div className="box md:order-2 order-1">
                        <h1 className="lg:text-5xl/tight text-3xl mb-7 font-bold text-sky-400 underline">
                            Tentang Kami
                        </h1>
                        <p>
                            LetterHub UGM dimulai dari masalah sederhana yang
                            dialami setiap mahasiswa: mengurus administrasi
                            surat. Kami lelah harus mengingat, membuka, dan
                            melacak status pengajuan surat di berbagai link
                            portal fakultas, Simaster, dan sistem informasi yang
                            berbeda-beda. Proyek ini adalah solusi kami. Misi
                            kami adalah menyediakan satu dashboard terpadu yang
                            bersih dan modern, sehingga mahasiswa UGM bisa
                            melacak semua pengajuan surat mereka di satu tempat.
                            Ini adalah inovasi untuk efisiensi kehidupan kampus.
                        </p>
                    </div>
                </div>

                <div className="Services pt-32" id="services">
                    <h1 className=" text-center lg:text-5xl/tight text-3xl mb-2 font-bold text-sky-400 underline">
                        Layanan
                    </h1>
                    <p className="text-center">
                        Berikut Berbagai Macam Layanan Yang Kami Sediakan
                    </p>
                    <div className="services-box pt-12 grid md:grid-cols-3 grid-cols-1 gap-10">
                        <div className="box bg-sky-300 rounded-lg shadow p-4">
                            <h3 className="text-xl font-bold text-white mt-6 mb-2">
                                Lacak Status Surat
                            </h3>
                            <p className="text-white text-base/loose">
                                Lihat status semua surat Anda (Diproses,
                                Selesai, Ditolak) dari berbagai fakultas dan
                                sumber dalam satu daftar yang rapi.
                            </p>
                        </div>
                        <div className="box bg-sky-300 rounded-lg shadow p-4">
                            <h3 className="text-xl font-bold text-white mt-6 mb-2">
                                Filter & Pencarian Instan
                            </h3>
                            <p className="text-white text-base/loose">
                                Temukan surat yang Anda butuhkan dalam hitungan
                                detik dengan fitur pencarian live dan filter
                                status yang responsif.
                            </p>
                        </div>
                        <div className="box bg-sky-300 rounded-lg shadow p-4 hover:transform:translateY(-5px)">
                            <h3 className="text-xl font-bold text-white mt-6 mb-2">
                                Simulasi Pengajuan Cepat
                            </h3>
                            <p className="text-white text-base/loose">
                                Coba ajukan surat baru langsung dari dashboard
                                dan lihat surat Anda langsung muncul di daftar
                                pelacakan secara instan.
                            </p>
                        </div>
                    </div>
                    <div className="box text-center pt-10">
                        <h1 className="text-base/8 mb-7">
                            Siap merasakan bedanya? Coba dashboard interaktif
                            kami dan lihat semua status surat Anda di satu
                            tempat.
                        </h1>
                        <Link
                            to="/ajukan-surat"
                            className="inline-flex items-center text-center bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full"
                        >
                            <i className="ri-add-line text-xl ms-1 mr-1"></i>
                            Ajukan Sekarang
                        </Link>
                    </div>
                </div>
                <div className="container"></div>
            </div>
        </div>
    );
};

export default homepage;
