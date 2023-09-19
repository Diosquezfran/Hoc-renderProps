// Importa la biblioteca React.
import React from 'react';

// Importa el Higher Order Component (HOC) 'withUser' desde el archivo correspondiente.
import withUser from '../hoc/withUser';

// Definición de un componente llamado 'UserProfile' que recibe 'user' como prop.
const UserProfile = ({ user }) => {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

// Aplica el HOC 'withUser' al componente 'UserProfile'.
const UserProfileHoc = withUser(UserProfile);

// Exporta el componente 'UserProfileHoc', que ya tiene los datos de usuario proporcionados por el HOC.
export default UserProfileHoc;
