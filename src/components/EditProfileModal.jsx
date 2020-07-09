import React from 'react';
import Modal from './Modal';
import EditProfile from './EditProfile';

const EditProfileModal = ({ user, renderProfile }) => {
  return (
    <Modal buttonText="Edit Profile" >
      <EditProfile renderProfile={()=>renderProfile()} />
    </Modal>
  );
};

export default EditProfileModal;

