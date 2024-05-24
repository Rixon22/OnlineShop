import React, { useState } from 'react';
import './tablaCatalogo.css';
import { Productos } from '../../models/productos';

const TablaCatalogo = () => {
    const [filtroNombre, setFiltroNombre] = useState('');
    const [selectedColors, setSelectedColors] = useState({});
    const [selectedSizes, setSelectedSizes] = useState({});

    const handleChangeFiltroNombre = (e) => {
        setFiltroNombre(e.target.value);
    };

    const handleChangeColor = (productId, color) => {
        setSelectedColors(prevColors => ({
            ...prevColors,
            [productId]: color
        }));
    };

    const handleChangeSize = (productId, size) => {
        setSelectedSizes(prevSizes => ({
            ...prevSizes,
            [productId]: size
        }));
    };

    const filtrarProductos = (producto) => {
        const nombreMatch = producto.name.toLowerCase().includes(filtroNombre.toLowerCase());
        return nombreMatch;
    };

    return (
        <div className="container">
            <div className="filtroNombre">
                <input placeholder='Buscar por nombre' type="text" id="nombreFiltro" value={filtroNombre} onChange={handleChangeFiltroNombre} />
            </div>
            <div className="row">
                {Productos.filter(filtrarProductos).map(producto => {
                    const selectedColor = selectedColors[producto.id] || producto.colores[0].color; // Default to the first color if none selected
                    const selectedColorData = producto.colores.find(c => c.color === selectedColor);
                    const selectedSize = selectedSizes[producto.id] || producto.tallas[0]; // Default to the first size if none selected

                    return (
                        <div key={producto.id} className="col-lg-3 col-md-6 col-sm-6 mb-4">
                            <div className="card">
                                <img src={selectedColorData.img} className="card-img-top" alt={producto.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.name}</h5>
                                    <p className="card-text">Color: {selectedColor}</p>
                                    <div className="color-buttons">
                                        {producto.colores.map((c, idx) => (
                                            <button
                                                key={idx}
                                                className={`color-button ${c.color === selectedColor ? 'active' : ''}`}
                                                style={{ backgroundColor: c.colorHEX }}
                                                onClick={() => handleChangeColor(producto.id, c.color)}
                                            ></button>
                                        ))}
                                    </div>
                                    <p className="card-text">Talla: {selectedSize}</p>
                                    <div className="size-buttons">
                                        {producto.tallas.map((size, idx) => (
                                            <button
                                                key={idx}
                                                className={`size-button ${size === selectedSize ? 'active' : ''}`}
                                                onClick={() => handleChangeSize(producto.id, size)}
                                            >{size}</button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TablaCatalogo;
