import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const DirectorForm = ({ director }) => {

    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [form, setForm] = useState({
        first_name: director?.first_name ?? "",
        last_name: director?.last_name ?? "",
        username: director?.username ?? "",
        email: director?.email ?? "",
        personal_phone: director?.personal_phone ?? "",
        home_phone: director?.home_phone ?? "",
        address: director?.address ?? ""
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
            console.log(director)
            if (director?.id) {
                await axios.post(
                    `http://127.0.0.1:8000/api/v1/director/${director.id}/update`,
                    { ...form }, { headers: { 'accept': 'application/json', 'authorization': token } }
                );
            } else {
                await axios.post(
                    `http://127.0.0.1:8000/api/v1/director/create`,
                    { ...form }, { headers: { 'accept': 'application/json', 'authorization': token } }
                );
            }
            navigate('/directors');

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-lg shadow-lg md:w-3/4 mx-auto'>
            <h1 className='text-gray-800 font-bold uppercase text-center text-xl mb-4'>
                {director?.id ? 'Edit' : 'Create'} Director
            </h1>

            {
                error && <p className='text-red-700 font-semibold text-xl'>Todos los campos son requeridos</p>
            }

            <form onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor='first_name'
                        className='text-gray-700 uppercase font-bold'>Primer nombre</label>
                    <input
                        id='first_name'
                        type="text"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                        placeholder='Primer nombre'
                        name='first_name'
                        value={form.first_name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor='last_name'
                        className='text-gray-700 uppercase font-bold'>Apellido</label>
                    <input
                        id='last_name'
                        type="text"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                        placeholder='Apellido'
                        name='last_name'
                        value={form.last_name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor='username'
                        className='text-gray-700 uppercase font-bold'>Username</label>
                    <input
                        id='username'
                        type="username"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                        placeholder='Nombre de usuario'
                        name='username'
                        value={form.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor='email'
                        className='text-gray-700 uppercase font-bold'>Correo electr??nico</label>
                    <input
                        id='email'
                        type="email"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                        name='email'
                        placeholder='Correo electr??nico'
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor='personal_phone'
                        className='text-gray-700 uppercase font-bold'>Tel??fono celular</label>
                    <input
                        id='personal_phone'
                        type="tel"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                        name='personal_phone'
                        placeholder='Tel??fono celular'
                        value={form.personal_phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor='home_phone'
                        className='text-gray-700 uppercase font-bold'>N??mero telef??nico </label>
                    <input
                        id='home_phone'
                        type="tel"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                        name='home_phone'
                        placeholder='N??mero telef??nico'
                        value={form.home_phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor='address'
                        className='text-gray-700 uppercase font-bold'>Direcci??n domiciliaria</label>
                    <textarea
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                        placeholder='Direcci??n'
                        name='address'
                        value={form.address}
                        onChange={handleChange}
                        required
                    />
                </div>

                <input
                    type="submit" className='bg-sky-800 w-full p-3 text-white uppercase font-bold rounded-lg hover:bg-sky-900 cursor-pointer transition-all'
                    value={director?.id ? 'Actualizar' : 'Guardar'}
                />
                <br></br>
                <br></br>
                <div >
                    <button type="button" className=" bg-sky-800 w-full p-3 text-white uppercase font-bold rounded-lg hover:bg-sky-900 cursor-pointer transition-all" >
                        <Link to='/directors'>
                            Regresar
                        </Link>
                    </button>
                </div>

            </form>
        </div>
    )
}
