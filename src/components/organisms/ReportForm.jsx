import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ReportForm = ({ report }) => {

    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [form, setForm] = useState({
        title: report?.title ?? "",
        description: report?.description ?? ""
    });
    const token = localStorage.getItem('token');

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Object.values(form).includes("")) {
            console.log("error");
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2500);
            return;
        }

        try {
            console.log(report)
            if (report?.id) {
                await axios.post(
                    `http://127.0.0.1:8000/api/v1/report/${report.id}/update`,
                    { ...form }, { headers: { 'accept': 'application/json', 'authorization': token } }
                );
            } else {
                await axios.post(
                    `http://127.0.0.1:8000/api/v1/report/create`,
                    { ...form }, { headers: { 'accept': 'application/json', 'authorization': token } }
                );
            }
            navigate('/reports');

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-lg shadow-lg md:w-3/4 mx-auto'>
            <h1 className='text-gray-800 font-bold uppercase text-center text-xl mb-4'>
                {report?.id ? 'Edit' : 'Create'} Reportes
            </h1>

            {
                error && <p className='text-red-700 font-semibold text-xl'>Todos los campos son requeridos</p>
            }

            <form onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor='title'
                        className='text-gray-700 uppercase font-bold'>T??tulo</label>
                    <input
                        id='title'
                        type="text"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                        placeholder='Titulo'
                        name='title'
                        value={form.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor='description'
                        className='text-gray-700 uppercase font-bold'>Descripci??n</label>
                    <input
                        id='description'
                        type="text"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                        placeholder='Descripci??n'
                        name='description'
                        value={form.description}
                        onChange={handleChange}
                        required
                    />
                </div>


                <input
                    type="submit" className='bg-sky-800 w-full p-3 text-white uppercase font-bold rounded-lg hover:bg-sky-900 cursor-pointer transition-all'
                    value={report?.id ? 'Actualizar' : 'Guardar'}
                />

                <br></br>
                <br></br>
                <div >
                    <button type="button" className=" bg-sky-800 w-full p-3 text-white uppercase font-bold rounded-lg hover:bg-sky-900 cursor-pointer transition-all" >
                        <Link to='/reports'>
                            Regresar
                        </Link>
                    </button>
                </div>

            </form>
        </div>
    )
}
