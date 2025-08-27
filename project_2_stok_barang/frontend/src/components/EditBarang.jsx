import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditBarang = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:8000/barang/${id}`);
      setNama(res.data.nama);
      setHarga(res.data.harga);
      setStok(res.data.stok);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/barang/${id}`, {
      nama,
      harga: Number(harga),
      stok: Number(stok),
    });
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-1/2 bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Edit Barang</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" value={nama} onChange={(e) => setNama(e.target.value)}
            className="border px-3 py-2 rounded"/>
          <input type="number" value={harga} onChange={(e) => setHarga(e.target.value)}
            className="border px-3 py-2 rounded"/>
          <input type="number" value={stok} onChange={(e) => setStok(e.target.value)}
            className="border px-3 py-2 rounded"/>
          <button type="submit" className="bg-blue-500 text-white py-2 rounded">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBarang;
