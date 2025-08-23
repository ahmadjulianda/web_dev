import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient

export const getAllSiswa = async(req, res) => {
    try {
        const respone = await prisma.datasiswa.findMany()
        res.status(200).json(respone)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const getSiswaById = async(req, res) => {
    try {
        const respone = await prisma.datasiswa.findUnique({
            where:{
                id:Number(req.params.id)
            }
        })
        res.status(200).json(respone)
    } catch (error) {
        res.status(401).json({message:error.message})
    }
}

export const createSiswa = async(req, res) => {
    try {
        const {nama, umur} = req.body
        const siswa = await prisma.datasiswa.create({
            where:{
                id:Number(req.params.id)
            },
            data: { nama, umur:Number(umur)},
        })

        res.json({ message: 'Siswa create successfully', siswa})
    } catch (error) {
        res.status(402).json({message:error.message})
    }
}

export const updateSiswa = async(req, res) => {
    try {
        const {id} = req.params
        const {nama, umur} = req.body
        const siswa = await prisma.datasiswa.update({
            where: {id: Number(id)},
            data: { nama, umur:Number(umur)},
        })

        res.json({ message: 'Siswa create successfully', siswa})
    } catch (error) {
        res.status(402).json({message:error.message})
    }
}

export const deleteSiswa = async(req, res) => {
    try {
        const respone = await prisma.datasiswa.delete({
            where:{
                id:Number(req.params.id)
            }
        })
        res.status(200).json(respone)
    } catch (error) {
        res.status(401).json({message:error.message})
    }
}