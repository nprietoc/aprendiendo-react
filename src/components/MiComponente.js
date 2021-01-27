import React from 'react';

const MiComponente = () => {
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomates', 'Queso', 'Jamon'],
            calorias: 400
        };

        return (
            <div>
                <h1>Hola, soy el componente llamado: MiComponente</h1>
                <h2>{'receta: ' + receta.nombre}</h2>
                <h3>{'ingredientes: ' + receta.ingredientes}</h3>
                <h3>{'calorias: ' + receta.calorias}</h3>
            </div>
            
        );

}

export default MiComponente;
