import React from 'react';
import GeneralCatalog from '../../components/Catalogs/GeneralCatalog/GeneralCatalog';
import CreateUserForm from '../../components/CreateUserForm';

const UsersCatalog = () => {
  const tableFields = [
    { name: 'username', label: 'Имя пользователя' },
    { name: 'password', label: 'Пароль' },
    { name: 'email', label: 'Почта' },
    { name: 'name', label: 'Реальное имя' },
    { name: 'age', label: 'Возраст' },
  ];

  return (
    <GeneralCatalog
      catalogTitle="Каталог пользователей"
      catalogURL="users"
      tableFields={tableFields}
      CreateFormComponent={CreateUserForm}
    />
  );
};

export default UsersCatalog;
