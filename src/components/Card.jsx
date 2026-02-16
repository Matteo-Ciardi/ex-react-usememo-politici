import { useState, useEffect } from "react";
import SinglePolitician from "./SinglePolitician";

import './card.css'

export default function Card() {

    const [politicians, setPoliticians] = useState([]);
    const [search, setSearch] = useState("");

    async function getPoliticians() {
        try {
            const response = await fetch('http://localhost:3333/politicians');
            const data = await response.json();
            console.log(data)
            setPoliticians(data)
            return data
        } catch (error) {
            console.error('Errore', error);
        }
    }

    useEffect(() => {
        getPoliticians();
    }, [])

    const filteredpoliticians = politicians.filter((politico) => {
        const searchLower = search.toLowerCase();
        return (
            politico.name.toLowerCase().includes(searchLower) || politico.biography.toLowerCase().includes(searchLower)
        );
    });

    console.log("Card principale ri-renderizzata");

    return (
        <>
            <div className="card-container">

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="searchbar"
                />

                {filteredpoliticians.map((politico) => (
                    <SinglePolitician
                        key={politico.id}
                        id={politico.id}
                        name={politico.name}
                        image={politico.image}
                        position={politico.position}
                        biography={politico.biography}
                    />
                ))}
            </div>
        </>
    )
}
