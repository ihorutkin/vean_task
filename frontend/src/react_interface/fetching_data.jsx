const API_BASE = 'http://localhost:8000/api';

export const fetchAllBooks = async () => {
    try{
        let nextBookPage = `${API_BASE}/books/`
        let allBooks = []
        while(nextBookPage){
            const response = await fetch(nextBookPage, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!response.ok){
                throw new Error(`Error: ${response.status}`)
            }
            const result = await response.json()
            allBooks = [...allBooks, ...result["results"]]
            nextBookPage = result["next"]
        }
        return allBooks
    }
    catch(err){
        throw err
    }
}

export const fetchAllAuthors = async () => {
    try{
        let nextAuthorPage = `${API_BASE}/authors/`
        let allAuthors = []
        while(nextAuthorPage){
            const response = await fetch(nextAuthorPage, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!response.ok){
                throw new Error(`Error: ${response.status}`)
            }
            const result = await response.json()
            allAuthors = [...allAuthors, ...result["results"]]
            nextAuthorPage = result["next"]
        }
        return allAuthors
    }
    catch(err){
        throw err
    }
}