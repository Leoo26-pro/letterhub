const AjukanSurat = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-sky-500 mb-4">
                Ajukan Surat
            </h1>
            <p className="text-gray-600">
                Ini adalah halaman untuk mengajukan surat.
            </p>

            {/* Tambahkan form atau konten lainnya */}
            <form className="mt-6">
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                        Jenis Surat
                    </label>
                    <select className="w-full px-4 py-2 border rounded-lg">
                        <option>Pilih jenis surat</option>
                        <option>Surat Keterangan</option>
                        <option>Surat Izin</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600"
                >
                    Kirim
                </button>
            </form>
        </div>
    );
};

export default AjukanSurat;
