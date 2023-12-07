import React, { useState, useEffect, useContext } from 'react';
import $api from '../../http/index';
import AuthContext from '../../context/authcontext';
import CreateUserForm from '../../components/UI/Forms/UserForm/CreateUserForm';
import UpdateUserForm from '../../components/UI/Forms/UserForm/UpdateUserForm';

import cl from '../../styles/Catalogs/Catalog.module.css';

const UserCatalog = () => {
    const { isAuth } = useContext(AuthContext);
    const [isCreateModalOpen, setisCreateModalOpen] = useState(false);
    const [isUpdateModalOpen, setisUpdateModalOpen] = useState(false);
    const [selectedUsers, setselectedUsers] = useState(null);

    const [Users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        number: '',
        price: '',
    });

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const response = await $api.get('/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error loading parking users:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await $api.delete(`/users/${id}`);
            setUsers(Users.filter((user) => user._id !== id));
        } catch (error) {
            console.error('Error deleting parking user:', error);
        }
    };

    const editUser = (user) => {
        setselectedUsers(user);
        setisUpdateModalOpen(true);
    };

    return (
        <div className={cl.mainContainer}>
            <h1>Users Catalog</h1>
            {isAuth && (
                <>
                    <button onClick={() => setisCreateModalOpen(true)}>Добавить нового пользователя</button>
                    {isCreateModalOpen && (
                        <CreateUserForm
                            visible={isCreateModalOpen}
                            loadUsers={() => loadUsers()}
                            setVisible={setisCreateModalOpen}
                        />
                    )}
                    {selectedUsers && (
                        <UpdateUserForm
                            loadUsers={() => loadUsers()}
                            user={selectedUsers}
                            visible={isUpdateModalOpen}
                            setVisible={setisUpdateModalOpen}
                        />
                    )}
                </>
            )}
            {Users.map((user) => (
                <div key={user._id} className={cl.Block}>
                    <div className={cl.infoBlock}>
                        <div>Username: {user.username}</div>
                        <div>Email: {user.email}</div>
                        <div>Password: {user.password}</div>
                        <div>Age: {user.age}</div>
                    </div>
                    {isAuth &&
                        <div>
                            <button onClick={() => editUser(user)}>Edit</button>
                            <button onClick={() => deleteUser(user._id)}>Delete</button>
                        </div>
                    }
                </div>
            ))}
        </div>
    );
};

export default UserCatalog;
