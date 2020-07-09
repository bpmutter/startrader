import React from 'react';
import Modal from './Modal';
import EditProfile from './EditProfile';

const EditProfileModal = ({user}) => {

    return(
        <Modal buttonText="Edit Profile">
            <EditProfile/>
        </Modal>
    )
}

export default EditProfileModal;

