import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const { user } = useAuth()
    return (
        <div>
            <div className='flex gap-3 p-4 items-center'>
                <img src={user.photoURL} title={user.displayName} className='w-8 h-8 rounded-full' alt="" />
                <h2 className='text-2xl'> Hello! {user.displayName}</h2>
            </div>
        </div>
    );
};

export default UserHome;