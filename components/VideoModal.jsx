// components/VideoModal.js
import React from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';

Modal.setAppElement('#__next'); // For accessibility

const VideoModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="z-20 fixed inset-0 flex justify-center items-center">
      <div className="p-4 z-20 rounded-lg shadow-lg w-fit">
        <button onClick={onClose} className="z-20 absolute top-2 right-2 text-gray-600 hover:text-gray-800">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div>
        <ReactPlayer url="https://www.youtube.com/watch?v=oA_HU1jMO7k" controls={true} />
        </div>
      </div>
    </Modal>
  );
};

export default VideoModal;
