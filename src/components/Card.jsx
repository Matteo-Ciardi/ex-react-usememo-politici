import { useState, useEffect } from "react";

import './card.css'

export default function Card() {

    const [politicians, setPoliticians] = useState([]);

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

    return (
        <>
            <div className="card-container">
                {politicians.map((politico) => (
                    <div key={politico.id}
                        className="politico-card">
                        <h3>{politico.name}</h3>
                        <div>
                            <img src={politico.image} className="politico-img"></img>
                        </div>
                        <span className="carica">{politico.position}</span>
                        <span>{politico.biography}</span>
                    </div>
                ))}
            </div>
        </>
    )
}
