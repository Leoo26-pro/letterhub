import BerandaImage from "../assets/image/beranda.svg";
import TentangImage from "../assets/image/tentang.svg";

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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nemo facilis, minus officiis numquam
                            repudiandae minima sunt ab quia dolore, consequuntur
                            doloremque dolor. Nulla, dignissimos a eos
                            temporibus enim nihil modi praesentium facere
                            aspernatur aliquid possimus. Ex est sed sapiente
                            molestias?
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Assumenda obcaecati ea sequi ipsam vero omnis
                            corporis quisquam ipsum illo fugiat. Nisi velit
                            voluptatum necessitatibus ullam ipsam autem rerum et
                            omnis!
                        </p>
                    </div>
                </div>

                <div className="Services pt-32" id="services">
                    <h1 className=" text-center lg:text-5xl/tight text-3xl mb-2 font-bold text-sky-400 underline">
                        Layanan
                    </h1>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis, ea.
                    </p>
                    <div className="services-box pt-12 grid md:grid-cols-3 grid-cols-1  gap-10">
                        <div className="box bg-sky-300 rounded-lg shadow p-4">
                            <h3 className="text-xl font-bold text-white mt-6 mb-2">
                                Layanan nomor 1
                            </h3>
                            <p className="text-white text-base/loose">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Asperiores ex nostrum
                                aspernatur soluta eos ullam.
                            </p>
                        </div>
                        <div className="box bg-sky-300 rounded-lg shadow p-4">
                            <h3 className="text-xl font-bold text-white mt-6 mb-2">
                                Layanan nomor 2
                            </h3>
                            <p className="text-white text-base/loose">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Asperiores ex nostrum
                                aspernatur soluta eos ullam.
                            </p>
                        </div>
                        <div className="box bg-sky-300 rounded-lg shadow p-4">
                            <h3 className="text-xl font-bold text-white mt-6 mb-2">
                                Layanan nomor 3
                            </h3>
                            <p className="text-white text-base/loose">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Asperiores ex nostrum
                                aspernatur soluta eos ullam.
                            </p>
                        </div>
                    </div>
                    <div className="box text-center pt-10">
                        <h1 className="text-base/8 mb-7">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Veritatis, iusto.
                        </h1>
                        <a
                            href="#"
                            className="text-center bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full"
                        >
                            <i className="ri-add-line text-xl ms-1 mr-1"></i>
                            Ajukan Sekarang
                        </a>
                    </div>
                </div>
                <hr />
                <div className="container"></div>
            </div>
        </div>
    );
};

export default homepage;
