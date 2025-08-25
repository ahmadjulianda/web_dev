import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const TambahSiswa = () => {
  const [nama, setNama] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/siswa", {
        nama: nama,
      });
      navigate("/"); // setelah sukses, kembali ke daftar siswa
    } catch (error) {
      console.error("Gagal menambah siswa:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Tambah Siswa Baru</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Nama Siswa
            </label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Masukkan nama siswa"
              required
            />
          </div>

          <div className="flex justify-between">
            <Link
              to="/"
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded shadow"
            >
              Batal
            </Link>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TambahSiswa;
