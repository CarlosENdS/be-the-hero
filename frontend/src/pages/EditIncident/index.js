import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from "../../services/api";

import logoImg from '../../assets/logo.svg';

import './styles.css'

export default function EditIncident(){
    const incidentId = localStorage.getItem('incidentId');
    const incidentTitle = localStorage.getItem('incidentTitle');
    const incidentDescription = localStorage.getItem('incidentDescription');
    const incidentValue = localStorage.getItem('incidentValue');
    const ongId = localStorage.getItem('ongId');

    const [title, setTitle] = useState(incidentTitle);
    const [description, setDescription] = useState(incidentDescription);
    const [value, setValue] = useState(incidentValue);

    const navigate = useNavigate();
    
    async function handleEditIncident(e){
        e.preventDefault();
        
        const data = {
            title,
            description,
            value,
        };

        try {
            await api.put(`incidents/${incidentId}`, data,{
                headers: {
                    Authorization: ongId,
                }
            });

            localStorage.removeItem('incidentId');
            localStorage.removeItem('incidentTitle');
            localStorage.removeItem('incidentDescription');
            localStorage.removeItem('incidentValue');

            navigate('/profile');
        } catch (err) {
            alert('Erro ao atualizar caso, tente novamente.');
        }
    }

    return(
        <div className="editIncidentContainer"> 
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="backLink" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleEditIncident} >
                    <input 
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        />
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        />

                    <button type="submit" className="button">Atualizar</button>
                </form>
            </div>
        </div>
    );
}