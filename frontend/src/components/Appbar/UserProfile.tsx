import React from 'react';

interface User {
    profileImg: string;
    name: string;
    email: string;
}

const UserProfile: React.FC<User> = ({ profileImg, name, email }) => {
    return (
        <div className="user-profile h-8 w-8 rounded-full">
            <img src={profileImg} alt={name} className="profile-image" />
            <h2>{name}</h2>
            <p>{email}</p>
            {/* You can render additional user details here */}
        </div>
    );
};

export default UserProfile;
