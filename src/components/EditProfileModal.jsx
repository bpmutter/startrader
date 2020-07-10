import React from 'react';
import Modal from './Modal';
import EditProfile from './EditProfile';

const EditProfileModal = ({ user, renderProfile, buttonStyles }) => {
  return (
    <Modal buttonText="Account" buttonStyles={buttonStyles}>
      <EditProfile renderProfile={() => renderProfile()} />
    </Modal>
  );
};

export default EditProfileModal;

