import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import useSWR from "swr"

const DaftarSiswa = () => {
  const fetcher = async() => {
    const response = await axios.get('http://localhost:8000/siswa')
    return response.data
  }

  // ⬇⬇ pastikan mutate ikut di-destructure
  const { data, mutate } = useSWR("siswa", fetcher);
  
  // Jika data belum tersedia, tampilkan loading
  if (!data) return <h1>Loading</h1>

   // fungsi hapus
  const handleDelete = async (id) => {
    if (window.confirm("Apakah kamu yakin ingin menghapus siswa ini?")) {
      try {
        await axios.delete(`http://localhost:8000/siswa/${id}`);
        mutate(); // revalidate data untuk key "siswa"
      } catch (error) {
        console.error("Gagal menghapus siswa:", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="w-3/4 bg-white p-6 rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold mb-4 text-center">Daftar Siswa</h1>

    <div className="flex justify-end mb-4">
      <Link
        to="/add"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
      >
        Tambah
      </Link>
    </div>

    <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gray-200 text-gray-700">
          <th className="border border-gray-300 px-4 py-2 text-center">No</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Nama</th>
          <th className="border border-gray-300 px-4 py-2 text-center">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data.map((siswa, index) => (
          <tr
            key={siswa.id || index}
            className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <td className="border border-gray-300 px-4 py-2 text-center">
              {index + 1}
            </td>
            <td className="border border-gray-300 px-4 py-2">{siswa.nama}</td>
            <td className="border border-gray-300 px-4 py-2 flex justify-center gap-2">
              <Link
                to={`/edit/${siswa.id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded shadow"
              >
                Edit
              </Link>
              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow">
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  )
}

export default DaftarSiswa