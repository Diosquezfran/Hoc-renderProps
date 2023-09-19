// Función que devuelve un objeto simulado de datos de usuario.
const getUserData = () => ({
    id: 1,
    name: "Franco",
    email: "Franco@mail.com"
});

// Definición de un Higher Order Component (HOC) llamado withUser.
// Toma un componente (Component) como argumento.
const withUser = (Component) => {
    // Devuelve una función que toma props.
    return function withUserComponent(props) {
        // Obtiene los datos de usuario utilizando la función getUserData.
        const user = getUserData();
        // Renderiza el componente original (Component) y pasa los datos de usuario como prop 'user'.
        return <Component {...props} user={user} />;
    };
};

// Exporta el HOC withUser para que pueda ser utilizado en otros componentes.
export default withUser;
