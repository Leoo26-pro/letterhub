import { useState } from "react";
import MailImage from "../assets/image/mail.svg";

const AjukanSurat = () => {
    const [activeFilter, setActiveFilter] = useState("Semua");
    const [searchQuery, setSearchQuery] = useState(" ");
    const [showModal, setShowModal] = useState(false);
    const [suratList, setSuratList] = useState([
        {
            id: 1001,
            title: "Transkrip Nilai Sementara",
            from: "Fakultas MIPA",
            date: "6 Nov 2025",
            status: "Diproses",
            statusColor: "bg-yellow-100 text-yellow-700",
        },
        {
            id: 1002,
            title: "Surat Keterangan Aktif",
            from: "Fakultas MIPA",
            date: "5 Nov 2025",
            status: "Selesai",
            statusColor: "bg-green-100 text-green-700",
        },
        {
            id: 1003,
            title: "Surat Izin Kuliah",
            from: "Fakultas MIPA",
            date: "3 Nov 2025",
            status: "Selesai",
            statusColor: "bg-green-100 text-green-700",
        },
        {
            id: 1004,
            title: "Surat Izin Kuliah",
            from: "Fakultas MIPA",
            date: "1 Nov 2025",
            status: "Ditolak",
            statusColor: "bg-red-100 text-red-700",
        },
    ]);

    const [formData, setFormData] = useState({
        jenisSurat: " ",
        fakultas: " ",
    });

    const filters = ["Semua", "Diproses", "Selesai", "Ditolak"];

    const filteredSurat = suratList.filter((surat) => {
        const hasilFilter =
            activeFilter === "Semua" || surat.status === activeFilter;
        const hasilSearch =
            !searchQuery ||
            (surat.title &&
                surat.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())) ||
            (surat.form &&
                surat.form.toLowerCase().includes(searchQuery.toLoweCase()));
        return hasilFilter && hasilSearch;
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        // Validasi form
        if (!formData.jenisSurat || !formData.fakultas) {
            alert("Harap isi semua field!");
            return;
        }

        const newSurat = {
            id: suratList.length + 1,
            title: formData.jenisSurat || "Surat Tanpa Judul",
            from: formData.fakultas || "Fakultas Tidak Diketahui",
            date: new Date().toLocaleDateString("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric",
            }),
            status: "Diproses", // Default status surat baru
            statusColor: "bg-yellow-100 text-yellow-700",
        };

        setSuratList((prev) => [newSurat, ...prev]);

        // Reset form dan tutup modal
        setFormData({ jenisSurat: "", fakultas: "" });
        setShowModal(false);

        alert("Surat berhasil diajukan!");
    };

    return (
        <div className="container mx-auto px-4 py-28">
            <div className="grid grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-3xl font-bold text-sky-500 mb-4">
                        Ajukan Surat
                    </h1>
                    <p className="text-gray-600">
                        Ini adalah halaman untuk mengajukan surat.
                    </p>
                </div>
                <img
                    src={MailImage}
                    alt="Mail Image"
                    className="w-[200px] mx-auto"
                />
            </div>
            {/* Tambahkan form atau konten lainnya */}
            <main>
                {/* search bar dan button ajukan surat*/}
                <div className="flex flex-col md:flex-row gap-2 pt-6">
                    <div className="flex-1">
                        <search className="">
                            <input
                                type="text"
                                placeholder="cari nama surat..."
                                walue={searchQuery || " "}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full border-black pl-2 pr-4 h-10 border rounded-lg"
                            />
                        </search>
                    </div>
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-sky-400 hover:bg-sky-500 text-white rounded-lg px-4 h-10 gap-2"
                    >
                        <i className="ri-add-line text-xl"></i>
                        Ajukan Surat Baru
                    </button>
                </div>

                {/* filter surat */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2 pt-10">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors text-sm ${
                                activeFilter === filter
                                    ? "bg-sky-500 text-white"
                                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* list surat */}
                <div className="space-y-4">
                    {filteredSurat.map((surat) => (
                        <div
                            key={surat.id}
                            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        {surat.title}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                                        {surat.from && (
                                            <>
                                                <span>
                                                    dari:{" "}
                                                    <span className="text-sky-500 font-medium">
                                                        {surat.from}
                                                    </span>
                                                </span>
                                                <span className="text-gray-400">
                                                    •
                                                </span>
                                            </>
                                        )}
                                        <span>Diajukan: {surat.date}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 self-start">
                                    <span
                                        className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${surat.statusColor}`}
                                    >
                                        {surat.status}
                                    </span>

                                    {surat.status === "Selesai" && (
                                        <a
                                            href="/ContohSuratSelesai.pdf"
                                            download={`Surat_${surat.title.replace(
                                                / /g,
                                                "_"
                                            )}.pdf`}
                                            className="p-2 text-sky-500 hover:bg-sky-50 rounded-lg transition-colors"
                                        >
                                            <i className="ri-file-download-line text-2xl"></i>
                                        </a>
                                    )}

                                    {surat.status === "Ditolak" && (
                                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                            <i className="ri-information-line text-2xl"></i>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredSurat.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">
                            Tidak ada surat yang ditemukan
                        </p>
                    </div>
                )}
            </main>
            {showModal && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
                    style={{ zIndex: 9999 }}
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="bg-white rounded-lg shadow-xl w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header Modal */}
                        <div className="flex items-center justify-between p-6 border-b">
                            <h2 className="text-xl font-bold text-gray-900">
                                Ajukan Surat Baru
                            </h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <i className="ri-close-line"></i>
                            </button>
                        </div>

                        {/* Form Content */}
                        <div className="p-6 space-y-4">
                            {/* Jenis Surat */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Jenis Surat{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="jenisSurat"
                                    value={formData.jenisSurat}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                                >
                                    <option value="">Pilih jenis surat</option>
                                    <option value="Surat Keterangan Aktif Kuliah">
                                        Surat Keterangan Aktif Kuliah
                                    </option>
                                    <option value="Surat izin Kuliah">
                                        Surat izin Kuliah
                                    </option>
                                    <option value="Transkrip Nilai Sementara">
                                        Transkrip Nilai Sementara
                                    </option>
                                    <option value="Surat Izin Penelitian">
                                        Surat Izin Penelitian
                                    </option>
                                    <option value="Surat Keterangan Lulus">
                                        Surat Keterangan Lulus
                                    </option>
                                    <option value="Surat Rekomendasi">
                                        Surat Rekomendasi
                                    </option>
                                </select>
                            </div>

                            {/* Fakultas */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Fakultas{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="fakultas"
                                    value={formData.fakultas}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                                >
                                    <option value="">Pilih fakultas</option>
                                    <option value="Fakultas Teknik">
                                        Fakultas Teknik
                                    </option>
                                    <option value="Fakultas MIPA">
                                        Fakultas MIPA
                                    </option>
                                    <option value="Fakultas Ekonomika dan Bisnis">
                                        Fakultas Ekonomika dan Bisnis
                                    </option>
                                    <option value="Fakultas Hukum">
                                        Fakultas Hukum
                                    </option>
                                    <option value="Fakultas Kedokteran">
                                        Fakultas Kedokteran
                                    </option>
                                </select>
                            </div>

                            {/* Keperluan */}

                            {/* Buttons */}
                            <div className="flex gap-3 pt-4">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                                >
                                    Batal
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="flex-1 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors text-sm font-medium"
                                >
                                    Kirim Pengajuan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AjukanSurat;
