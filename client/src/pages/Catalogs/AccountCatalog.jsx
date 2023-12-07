import React, { useState, useEffect, useContext } from 'react';
import $api from '../../http/index';
import AuthContext from '../../context/authcontext';
import CreateAccountForm from '../../components/UI/Forms/AccountForm/CreateAccountForm';
import UpdateAccountForm from '../../components/UI/Forms/AccountForm/UpdateAccountForm';

import cl from '../../styles/Catalogs/Catalog.module.css';

const AccountCatalog = () => {
    const { isAuth } = useContext(AuthContext);
    const [isCreateModalOpen, setisCreateModalOpen] = useState(false);
    const [isUpdateModalOpen, setisUpdateModalOpen] = useState(false);
    const [selectedAccounts, setselectedAccounts] = useState(null); 

    const [Accounts, setAccounts] = useState([]);
    const [newAccount, setNewAccount] = useState({
        amount: 0
    });

    useEffect(() => {
        loadAccounts();
    }, []);

    const loadAccounts = async () => {
        try {
            const response = await $api.get('/accounts');
            setAccounts(response.data);
        } catch (error) {
            console.error('Error loading parking Accounts:', error);
        }
    };

    const createParkingAccount = async () => {
        try {
            const response = await $api.post('/accounts', newAccount);
            setAccounts([...Accounts, response.data]);
            setNewAccount({
                number: '',
                price: '',
            });
        } catch (error) {
            console.error('Error creating parking Account:', error);
        }
    };

    const deleteAccount = async (id) => {
        try {
            await $api.delete(`/accounts/${id}`);
            setAccounts(Accounts.filter((Account) => Account._id !== id));
        } catch (error) {
            console.error('Error deleting parking Account:', error);
        }
    };

    const editAccount = (Account) => {
        setselectedAccounts(Account);
        setisUpdateModalOpen(true);
    };

    return (
        <div className={cl.mainContainer}>
            <h1>Accounts Catalog</h1>
            {isAuth && (
                <>
                    <button onClick={() => setisCreateModalOpen(true)}>Добавить счет</button>
                    {isCreateModalOpen && (
                        <CreateAccountForm
                            visible={isCreateModalOpen}
                            loadAccounts={() => loadAccounts()}
                            setVisible={setisCreateModalOpen}
                        />
                    )}
                    {selectedAccounts && (
                        <UpdateAccountForm
                            loadAccounts={() => loadAccounts()}
                            Account={selectedAccounts}
                            visible={isUpdateModalOpen}
                            setVisible={setisUpdateModalOpen}
                        />
                    )}
                </>
            )}
            {Accounts.map((Account) => (
                <div key={Account._id} className={cl.Block}>
                    <div className={cl.infoBlock}>
                        <div>Amount: {Account.amount}</div>
                    </div>
                    <button onClick={() => editAccount(Account)}>Edit</button>
                    <button onClick={() => deleteAccount(Account._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default AccountCatalog;
