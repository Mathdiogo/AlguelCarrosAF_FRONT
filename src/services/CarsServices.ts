import { instanceApi } from "./config/ApiConfigure"


export const getAllCardsList =  async () => {
    console.log('esta caindio aqui?')
    try {
        const response = await instanceApi.get('/list')
        console.log(response.data)
        return response.data
    } catch(e) {
        console.log(e)
        throw e;
    }
}

export const updateRentedCar = async (id: any, email: string) => {
    console.log('esta caindio aqui?')
    try {
        await instanceApi.patch(`/rent/${id}/${email}`)
        return alert('Carro alugado com sucesso')
    } catch(e) {
        console.log(e)
        throw e;
    }
}

export const deleteCarId = async (id: any) => {
    try {
        await instanceApi.delete(`/delete/${id}`)
        return alert('Carro deletado com sucesso!')
    } catch(e) {
        console.log(e)
        throw e; 
    }
}

export const createCar = async (requestBody: any) => {
    console.log(requestBody, 'request que vai ser ebnviado para oback')
    try {
       return await instanceApi.post(`/create`, requestBody)
    } catch(e) {
        throw e;
    }
}


