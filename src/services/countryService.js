const baseUrl = 'https://restcountries.com/v3.1/all?fields=name,flags,capital'

export const getAll = async() => {
    const response = await fetch(baseUrl)
    const result = await response.json()

    return Object.values(result)
    // return result
    // return Object.entries(result)
}


