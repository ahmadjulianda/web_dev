import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditSiswa = () => {
  const [nama, setNama] = useState("");
  const { id } = useParams(); // ambil ID dari URL
  const navigate = useNavigate();

  // ambil data siswa berdasarkan ID
  useEffect(() => {
    const getSiswaById = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/siswa/${id}`);
        setNama(response.data.nama);
      } catch (error) {
        console.error("Gagal mengambil data siswa:", error);
      }
    };
    getSiswaById();
  }, [id]);

  // handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/siswa/${id}`, {
        nama: nama,
      });
      navigate("/"); // kembali ke daftar siswa setelah update
    } catch (error) {
      console.error("Gagal mengupdate siswa:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Edit Data Siswa</h1>

        <form onSubmit={handleUpdate}>
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
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSiswa;
