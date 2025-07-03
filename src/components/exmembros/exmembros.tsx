import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./exmembros.css";

import tutorImg from "./../../assets/images/members/profile.png";

const membros = ['1 - Eduardo Vansetto 09/12/2010 até 03/03/2011,',
 '2 - Eliezer De Souza Dos Reis 09/12/2010 até 03/03/2011,',
 '3 - Vitor De Siqueira Gallas 11/12/2010 até 03/03/2011,',
 '4 - Dener Junior Ribeiro Da Cunha 09/12/2010 até 11/12/2011,',
 '5 - Heitor Faccioni 08/12/2010 até 11/12/2011,',
 '6 - Fernando Spanhol 08/12/2010 até 12/01/2012,',
 '7 - Felipe Da Silva Inacio 06/03/2011 até 12/01/2012,',
 '8 - Aline Vaplak Faria 08/12/2010 até 12/01/2012,',
 '9 - Leandro Jorge Vieira Da Maia 08/12/2010 até 29/03/2012,',
 '10 - Julio Cesar Lazzarim 06/03/2011 até 25/10/2012,',
 '11 - Jeferson Jose Baqueta 08/12/2010 até 21/12/2012,',
 '12 - Luiz Gustavo De Souza 08/12/2010 até 21/12/2012,',
 '13 - Tiago Zilio Jesuino 06/03/2011 até 21/12/2012,',
 '14 - Julian Alberto Piovesan Ruiz Dias 21/09/2011 até 21/12/2012,',
 '15 - Victor Hugo Rohsig Silva 08/12/2010 até 21/12/2012,',
 '16 - Gustavo Henrique Paetzold 02/03/2011 até 21/12/2013,',
 '17 - Diego Henrique Pagani 10/02/2012 até 21/12/2013,',
 '18 - Mateus Felipe Teixeira 08/12/2010 até 21/12/2013,',
 '19 - Ayrton Jose Lopes 18/07/2013 até 07/08/2014,',
 '20 - Deivide Possamai 10/02/2012 até 22/12/2014,',
 '21 - Charles Giovane De Salles 03/03/2012 até 22/12/2014,',
 '22 - Marcelo Fudo Rech 05/03/2012 até 22/12/2014,',
 '23 - Remi Pietsch Junior 02/11/2012 até 22/12/2014,',
 '24 - Joao Paulo Colling 10/02/2012 até 22/12/2014,',
 '25 - Fernando Fernandes Dos Santos 10/02/2012 até 27/01/2015,',
 '26 - Victor Cassiano Naumann 08/08/2014 até 16/02/2015,',
 '27 - Marco Antonio Ferreira Birck 07/05/2015 até 30/06/2015,',
 '28 - Alexandra Ferrari 22/12/2012 até 24/07/2015,',
 '29 - Thales Felipe Costa Bertaglia 01/11/2012 até 26/02/2016,',
 '30 - Joao Pedro Silveira 27/07/2015 até 11/04/2016,',
 '31 - Cleison Arenhart Dos Santos 01/03/2016 até 11/04/2016,',
 '32 - Leonardo Aparecido Caracho 07/05/2015 até 11/04/2016,',
 '33 - Gabriela Marim De Souza 09/05/2016 até 04/04/2017,',
 '34 - Bianca Carvalho De Oliveira 09/05/2016 até 04/04/2017,',
 '35 - Guilherme Felipe Zabot 23/12/2013 até 04/04/2017,',
 '36 - Alexandre Barreiro Neto 18/07/2013 até 04/04/2017,',
 '37 - Gabriel Bruscatto 04/09/2013 até 04/04/2017,',
 '38 - Henrique Pedro De Oliveira 22/12/2012 até 04/04/2017,',
 '39 - Vinicius Laurenci 12/05/2017 até 29/01/2018,',
 '40 - Leticia Torres Bertoldo 07/05/2015 até 20/02/2018,',
 '41 - Camila Tiemi Outa 11/05/2017 até 20/02/2018,',
 '42 - Luis Fernando Veronese Trivelatto 08/08/2014 até 20/02/2018,',
 '43 - Matheus De Lara Dias Da Silva 05/04/2017 até 20/02/2018,',
 '44 - Nicolas Afonso Bertaglia Comissio 05/04/2017 até 20/02/2018,',
 '45 - Renan Tashiro 08/05/2015 até 22/08/2019,',
 '46 - Lucas Frank Hollmann 09/04/2018 até 09/09/2020,',
 '47 - Angelo Jose Orssatto 10/04/2019 até 01/10/2020,',
 '48 - Luani Regina Ebert 20/10/2020 até 22/03/2021,',
 '49 - Amanda Israel Graeff Borges 27/04/2018 até 23/03/2021,',
 '50 - Andre Gustavo Sanches Silva 09/04/2018 até 23/03/2021,',
 '51 - Danielly Omori Antunes De Oliveira 07/04/2018 até 23/03/2021,',
 '52 - Elixandre Michael Baldi 09/05/2016 até 23/03/2021,',
 '53 - Gabriela Paola Sereniski 07/04/2018 até 23/03/2021,',
 '54 - Hendric Gabriel Cechinato 23/12/2014 até 23/03/2021,',
 '55 - Joao Alberto Arbugeri Koleski 12/05/2017 até 23/03/2021,',
 '56 - Leo Jarbas Casarin 19/05/2017 até 23/03/2021,',
 '57 - Matheus Leonardo Da Silva Dias 07/05/2015 até 23/03/2021,',
 '58 - Pedro Lucas Moraes 07/04/2018 até 23/03/2021,',
 '59 - Valquiria Prestes Belusso 07/04/2018 até 23/03/2021,',
 '60 - Willian Cavaller Faino 31/07/2017 até 23/03/2021,',
 '61 - Mateus Edival Rodrigues Da Silveira 20/06/2017 até 18/08/2021,',
 '62 - Matheus Nunes Ismael 04/06/2019 até 06/09/2021,',
 '63 - Daniel Carlos Chaves Boll 10/04/2019 até 07/03/2022,',
 '64 - Lucas Giovanini De Andrade Amorim 15/10/2020 até 02/05/2022,',
 '65 - Gustavo Lopes Nomelini 14/10/2020 até 27/05/2022,',
 '66 - Igor Franca Negrizoli 24/05/2018 até 30/08/2022,',
 '67 - Mateus Karvat Camara 07/04/2018 até 30/08/2022,',
 '68 - Roberta Aparecida Da Silva Alcantara 07/04/2018 até 30/08/2022,',
 '69 - Felipi Lima Matozinho 10/04/2019 até 06/09/2022,',
 '70 - Leonardo Vanzin 09/04/2018 até 15/05/2023,',
 '71 - Lucas Veit De Sa 14/10/2020 até 15/05/2023,',
 '72 - Marco Antonio Damo 15/10/2020 até 01/08/2023,',
 '73 - Pedro Hernesto Pissetti Venzke 08/03/2022 até 17/08/2023,',
 '74 - Maria Eduarda Crema Carlos 08/03/2022 até 17/08/2023,',
 '75 - Gabriel Santos Da Silva 15/03/2022 até 17/08/2023,',
 '76 - Vinicius Muller De Freitas 23/03/2021 até 17/08/2023,',
 '77 - Leonardo Mateus Royer 29/09/2023 até 07/12/2023,',
 '78 - Marlon Fabichacki Pereira 08/03/2022 até 06/05/2024,',
 '79 - Jaqueline Cavaller Faino 06/12/2022 até 20/06/2024,',
 '80 - Davi Marchetti Giacomel 15/10/2020 até 20/06/2024,',
 '81 - Weberson Morelli Leite Junior 06/12/2022 até 20/06/2024,',
 '82 - Kayra Kazumi Yokoyama 13/08/2024 até 27/09/2024,',
 '83 - Guilherme Henrique Viapiana Smanioto 13/08/2024 até 11/12/2024,',
 '84 - Rafael Loureiro Fockink 13/08/2024 até 11/12/2024,',
 '85 - Isadora Coelho Araujo 08/03/2022 até 28/03/2025,',
 '86 - Gabriel Yudi Leite Higuchi 06/12/2022 até 02/04/2025,',
 '87 - Ronaldo Drecksler Farias Pacheco 06/12/2022 até 21/04/2025,',
 '88 - Leonardo Calsavara 29/09/2023 até 21/04/2025,',
 '89 - David Antonio Brocardo 06/12/2022 até 21/04/2025,']


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
