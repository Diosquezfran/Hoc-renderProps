// Importa las bibliotecas React, useEffect y useState.
import React, { useEffect, useState } from 'react';

// Importa el componente 'List' que se utilizará en este archivo.
import List from './List';

// Importa el Higher Order Component (HOC) 'withLoading' desde su ubicación correspondiente.
import withLoading from '../../hoc/withLoading';

// Aplica el HOC 'withLoading' al componente 'List'.
const ListDelHoc = withLoading(List);

// Define el componente 'ListContainer'.
const ListContainer = () => {
  // Define el estado para 'items' y 'loading'.
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Utiliza useEffect para simular una carga de datos.
  useEffect(() => {
    // Muestra un mensaje de carga al establecer 'loading' en verdadero.
    setLoading(true);

    // Simula una demora de 2 segundos antes de actualizar 'items' y desactivar la carga.
    setTimeout(() => {
      setItems(["Item1", "Item2", "Item3"]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {/* Renderiza el componente 'ListDelHoc' (List con funcionalidad de carga) */}
      <ListDelHoc items={items} isLoading={loading} />
    </div>
  );
};

// Exporta el componente 'ListContainer'.
export default ListContainer;
