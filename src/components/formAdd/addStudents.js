import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createStudents } from "../../applicationActions/studentsActions";

const AddStudent = () => {
    const [initialState, setInitialState] = useState({
        id: null,
        name: "",
        country: "",
        state: "",
        date_Birth: "",
        published: false
    });

    const [submitted, setSubmitted] = useState(false);
    const [ufs, setUfs] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedUf, setSelectedUf] = useState("0");

    const dispatch = useDispatch();

    function handleInputChange(event) {
        setInitialState({ ...initialState, [event.target.name]: event.target.value });
    };

    function handleSelectUf(event) {
        setSelectedUf(event.target.value);
        console.log(event.target.value)

    }

    function saveStudent() {
        const { name, country, state, date_Birth } = initialState;

        dispatch(createStudents(name, country, state, date_Birth)).then(data => {
            setInitialState({
                id: data.id,
                name: data.name,
                country: data.country,
                state: data.state,
                date_Birth: data.date_Birth,
                published: data.published
            });
            setSubmitted(true);
            console.log(data);
        })
            .catch(e => {
                console.log(e);
            });
    };

    function newStudent() {
        setInitialState({
            id: null,
            name: "",
            country: "",
            state: "",
            date_Birth: "",
            published: false
        });
        setSubmitted(false);
    };

    useEffect(() => {
        axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/").then((response) => {
            setUfs(response.data);
            returnCity();
        });
    }, [selectedUf]);

    function returnCity() {
        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then((response) => {
            setCities(response.data);
        });
    };

    return (
        <div className="submit-form">
            {submitted === true ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newStudent}>Add</button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            required
                            value={initialState.name}
                            onChange={handleInputChange}
                            name="name"
                        />
                    </div>

                    <div className="container">

                        <select name="uf" onChange={handleSelectUf}>
                            <option value="0">Selecione uma UF</option>
                            {ufs.map((uf) => (
                                <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
                            ))}
                        </select>

                        <select name="City" >
                            <option value="0">Selecione uma cidade</option>
                            {cities.map((city) => (
                                <option key={city.id} value={city.nome}>{city.nome}</option>
                            ))}
                        </select>

                    </div>

                    <button onClick={saveStudent} className="btn btn-success">Submit</button>
                </div>
            )}
        </div>
    );
};

export default AddStudent;
