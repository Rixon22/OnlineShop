import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './tablaCatalogo.css';
import { Productos } from '../../models/productos';

// Obtener colores únicos
const coloresUnicos = [...new Set(Productos.map(producto => ({ nombre: producto.color, hex: producto.colorHEX })))];


const TablaCatalogo = () => {
    const [filtroColor, setFiltroColor] = useState('');
    const [filtroNombre, setFiltroNombre] = useState('');

    const handleChangeFiltroColor = (color) => {
        setFiltroColor(color);
    };

    const handleChangeFiltroNombre = (e) => {
        setFiltroNombre(e.target.value);
    };

    const productosFiltrados = Productos.filter(producto => {
        const nombreMatch = producto.name.toLowerCase().includes(filtroNombre.toLowerCase());
        const colorMatch = filtroColor ? producto.color === filtroColor : true;
        return nombreMatch && colorMatch;
    });

    return (
        <div className="container">
            <div className="filtroColor">
                <label>Filtrar por color:</label>
                <div className="color-buttons">
                    <button className={`color-button ${filtroColor === '' ? 'active' : ''}`} onClick={() => handleChangeFiltroColor('')}>X</button>
                    {coloresUnicos.map((color, colorHEX, index) => (
                        <button key={index} className={`color-button ${filtroColor === color.nombre ? 'active' : ''}`} style={{ backgroundColor: color.hex }} onClick={() => handleChangeFiltroColor(color.nombre)}></button>
                    ))}
                </div>
            </div>
            <div className="filtroNombre">
                <input placeholder='Buscar por nombre' type="text" id="nombreFiltro" value={filtroNombre} onChange={handleChangeFiltroNombre} />
            </div>
            <div className="row">
                {productosFiltrados.map(producto => (
                    <div key={producto.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card">
                            <img src={producto.img} className="card-img-top" alt={producto.name} />
                            <div className="card-body">
                                <h5 className="card-title">{producto.name}</h5>
                                <p className="card-text">Color: {producto.color}</p>
                                <Link to={`/producto/${producto.id}`} className="btn btn-primary">Ver detalles</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TablaCatalogo;
