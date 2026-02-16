import { memo } from "react";

const SinglePolitician = memo(({ id, name, image, position, biography }) => {

    return (
        <div className="politico-card">
            <h3>{name}</h3>
            <div>
                <img src={image} className="politico-img" />
            </div>
            <span className="carica">{position}</span>
            <span>{biography}</span>
        </div>
    )
});

export default SinglePolitician