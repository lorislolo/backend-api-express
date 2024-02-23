import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const listAll = async () => {
    return await prisma.user.findMany()
}

const getById = async (id) => {
    return await prisma.user.findUnique({
        where: {
            id
        }
    })
}

const create = async (id) => {
    return await prisma.user.create()
}

const remove = async (id) => {
    return await prisma.user.delete({
        where: {
            id
        }
    })
}


export default { listAll, getById, create, remove }