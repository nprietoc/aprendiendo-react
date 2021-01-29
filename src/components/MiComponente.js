import React from 'react';
// import Componente2 from './componente-2';

const MiComponente = () => {
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomates', 'Queso', 'Jamon'],
            calorias: 400
        };

        return (
            <div>
                {/* <Componente2 /> */}
                <h2>{'receta: ' + receta.nombre}</h2>
                <h3>{'ingredientes: ' + receta.ingredientes}</h3>
                <h3>{'calorias: ' + receta.calorias}</h3>
            </div>
            
        );

}

export default MiComponente;
