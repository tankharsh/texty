import React from 'react'

function About(props) {
    return (
        <div>
            <div className="card my-3 mx-5" style={{ width: "50rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.About}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">That is information</h6>
                    <p className="card-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, quia tenetur. Ea doloremque aut velit, nemo dolor similique sit incidunt eveniet, labore quae ex iure natus! Asperiores similique necessitatibus aut. Eaque quos sequi quia quibusdam fugit fugiat vel exercitationem temporibus.
                    </p>
                    <a href="/" className="card-link">
                        Card link
                    </a>
                    <a href="/" className="card-link">
                        Another link
                    </a>
                </div>
            </div>

            <div className="card my-3 mx-5" style={{ width: "50rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.About}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">That is information</h6>
                    <p className="card-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, quia tenetur. Ea doloremque aut velit, nemo dolor similique sit incidunt eveniet, labore quae ex iure natus! Asperiores similique necessitatibus aut. Eaque quos sequi quia quibusdam fugit fugiat vel exercitationem temporibus.
                    </p>
                    <a href="/" className="card-link">
                        Card link
                    </a>
                    <a href="/" className="card-link">
                        Another link
                    </a>
                </div>
            </div>

        </div>
    )
}

export default About