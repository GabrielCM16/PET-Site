import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./exmembros.css";

import tutorImg from "./../../assets/images/members/profile.png";

const membros = [
    "Ronaldo Farias",
    "João da Silva",
    "Maria Oliveira",
    "Ana Souza",
];


const Membros: React.FC = () => {


    return (
        <main className="container text-center mt-5">
            <h1 className="display-3 mt-5">EX-MEMBROS</h1>

            <div className="mt-5">
                <h2 className="display-6 mb-4">EX-Tutores</h2>
                <div className="row justify-content-center">
                    <div className="col-md-4 d-flex flex-column align-items-center mb-4">
                        <img
                            src={tutorImg}
                            alt="Tutor Guilherme Galante"
                            className="rounded-circle mb-3"
                            style={{ width: "200px", height: "200px" }}
                        />
                        <h3 className="fs-2">Marcio Seiji Oyamada</h3>
                        <p className="fs-4">Tutor desde 2016</p>
                    </div>


                    <div className="col-md-4 d-flex flex-column align-items-center mb-4">
                        <img
                            src={tutorImg}
                            alt="Tutor Vanessa Silva"
                            className="rounded-circle mb-3"
                            style={{ width: "200px", height: "200px" }}
                        />
                        <h3 className="fs-2">Clodis Boscarioli</h3>
                        <p className="fs-4">Tutor desde 2010</p>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h2 className="display-6 mb-4">Ex-membros</h2>
                <ul className="list-group list-group-flush">
                    {membros.map((nome, index) => (
                        <li key={index} className="list-group-item fs-5">
                            {nome}
                        </li>
                    ))}
                </ul>
            </div>

        </main>
    );
};

export default Membros;
