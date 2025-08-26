import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient

export const getBarang=async(req, res) => {
    try {
        const reponse = await prisma.stokbarang.findMany()  // "stokbarang" mengacu pada nama tabel di database
        res.status(200).json(reponse)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const getBarangById=async(req, res) => {
    try {
        const reponse = await prisma.stokbarang.findUnique({
            where:{
                id : Number(req.params.id)
            }
        })
        res.status(200).json(reponse)
    } catch (error) {
        res.status(401).json({message:error.message})
    }
}

export const createBarang=async(req, res) => {
    const {nama, harga, stok} = req.body
    try {
        const reponse = await prisma.stokbarang.create({
            data: {
                nama: nama,
                harga: harga,
                stok: stok
            }
        })
        res.status(200).json(reponse)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const updateBarang=async(req, res) => {
    const {nama, harga, stok} = req.body
    try {
        const reponse = await prisma.stokbarang.update({
            where: {
                id : Number(req.params.id)
            },
            data: {
                nama: nama,
                harga: harga,
                stok: stok
            }
        })
        res.status(200).json(reponse)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const deleteBarang=async(req, res) => {
    try {
        const reponse = await prisma.stokbarang.delete({
            where: {
                id : Number(req.params.id)
            }
        })
        res.status(200).json(reponse)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}