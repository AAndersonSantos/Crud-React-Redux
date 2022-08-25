import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createStudents } from "../../../applicationActions/studentsActions";
import "./styleAddStudents.scss"

const AddStudent = () => {

    const dispatch = useDispatch();

    const [initialState, setInitialState] = useState({
        id: null,
        name: "",
        state: "",
        city: "",
        date_Birth: new Intl.DateTimeFormat('pt-br').format(new Date()),
        published: false
    });

    const [submitted, setSubmitted] = useState(false);
    const [ufs, setUfs] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState();
    console.log(initialState)
    function handleInputChange(event) {
        setInitialState({ ...initialState, [event.target.name]: event.target.value });
    };
    
    function handleSelectState(event) {
        setSelectedState(event.target.value);
        handleInputChange(event)
    }

    function saveStudent() {
        const { name, state, city, date_Birth } = initialState;

        dispatch(createStudents(name, state, city, date_Birth)).then(data => {
            setInitialState({
                id: data.id,
                name: data.name,
                state: data.state,
                city: data.city,
                date_Birth: data.date_Birth,
                published: data.published
            });
            setSubmitted(true);
            console.log(data);
        }).catch(e => {
            console.log(e);
        });
    };

    function newStudent() {
        setInitialState({
            id: null,
            name: "",
            state: "",
            city: "",
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
    }, [selectedState]);

    function returnCity() {
        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios`).then((response) => {
            setCities(response.data);
        });
    };

    return (
        <div className="submit-form-students">
            {submitted === true ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newStudent}>Add</button>
                </div>
            ) : (
                <div className="form-input">
                    <h1>Add Students</h1>

                    <div className="form-name">
                        <label htmlFor="name">Name</label>
                        <input
                            className="input-name"
                            type="text"
                            id="name"
                            required
                            value={initialState.name}
                            onChange={handleInputChange}
                            name="name"/>
                    </div>

                    <div className="container-select">

                        <label htmlFor="state" className="label-state">State
                        <select className="select-state" name="state" id="state" onChange={handleSelectState}>
                            <option value="0">Selecione uma UF</option>
                            {ufs.map((uf) => (
                                <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
                                ))}
                        </select>
                        </label>

                        <label htmlFor="city" className="label-city">City
                        <select className="select-city" name="city" id="city" onChange={handleInputChange}>
                            <option value="0">Selecione uma cidade</option>
                            {cities.map((city) => (
                                <option key={city.id} value={city.nome}>{city.nome}</option>
                            ))}
                        </select>
                        </label>

                    </div>

                    <label htmlFor="date_Birth" className="label-date-Birth">Date of Birth
                    <input 
                        className="input-date"
                        type="date" 
                        value={initialState.date_Birth}
                        onChange={handleInputChange}
                        name="date_Birth">
                    </input>
                    </label> 

                    <button onClick={saveStudent} className="btn btn-success">Submit</button>
                </div>
            )}
        </div>
    );
};

export default AddStudent;

//onChange={e => setTeste(e.target.value)}
