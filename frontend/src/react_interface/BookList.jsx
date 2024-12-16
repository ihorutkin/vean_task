import React, {useEffect, useState} from "react";

export default function BookList(){
    const [books, setBooks] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch("http://localhost:8000/api/books/", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                if (!response.ok){
                    throw new Error(`Error: ${response.status}`)
                }
                const result = await response.json()
                setBooks(result)
            }
            catch(err){
                setError(err.message)
            }
        }
        fetchData()
    }, [])

    if (error) return <div>Error: { error }</div>
    return(
        <div>
            <h2>List of books</h2>
            <pre>{ JSON.stringify(books, null, 2) }</pre>
        </div>
    )
}