import React, { useEffect, useRef } from 'react';

import {
  Wrapper,
  ModalBody,
  ModalParagraph,
  ModalTitle,
  ModalSubTitle,
  ModalCloseBtn,
} from './ModalWindowBlog.styled';

import closeModal from 'images/Blog/CloseModal.png';

export const ModalWindowBlog = ({ data, isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = event => {
      if (event.target === modalRef.current) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  return (
    <Wrapper ref={modalRef}>
      <ModalBody>
        <ModalTitle>{data.title}</ModalTitle>
        {data.posts &&
          data.posts.map((el, idx) => (
            <ModalParagraph key={idx}>
              {el.subtitle && <ModalSubTitle>{el.subtitle}</ModalSubTitle>}
              <p>{el.paragraph}</p>
            </ModalParagraph>
          ))}
        <ModalCloseBtn onClick={onClose}>
          <img src={closeModal} alt="" />
        </ModalCloseBtn>
      </ModalBody>
    </Wrapper>
  );
};
