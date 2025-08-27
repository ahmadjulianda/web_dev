import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TambahBarang = () => {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/barang", {
      nama,
      harga: Number(harga),
      stok: Number(stok),
    });
    navigate("/"); // balik ke daftar barang
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-1/2 bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Tambah Barang</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" placeholder="Nama Barang"
            value={nama} onChange={(e) => setNama(e.target.value)}
            className="border px-3 py-2 rounded"/>
          <input type="number" placeholder="Harga"
            value={harga} onChange={(e) => setHarga(e.target.value)}
            className="border px-3 py-2 rounded"/>
          <input type="number" placeholder="Jumlah Stok"
            value={stok} onChange={(e) => setStok(e.target.value)}
            className="border px-3 py-2 rounded"/>
          <button type="submit" className="bg-green-500 text-white py-2 rounded">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default TambahBarang;
