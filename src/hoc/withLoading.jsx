// Definición de un Higher Order Component (HOC) llamado withLoading.
// Toma un componente (Component) como argumento.
const withLoading = (Component) => {
    // Devuelve una función que toma props, incluyendo isLoading.
    return function WithLoadingComponent({ isLoading, ...props }) {
        // Comprueba si isLoading es verdadero.
        if (isLoading) {
            // Si isLoading es verdadero, muestra un mensaje de carga.
            return <p>Cargando</p>;
        }
        // Si isLoading es falso, renderiza el componente original (Component) con todas las props pasadas.
        return <Component {...props} />;
    };
};

// Exporta el HOC withLoading para que pueda ser utilizado en otros componentes.
export default withLoading;
