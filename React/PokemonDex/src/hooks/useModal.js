import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const openModal = (data) => {
    setSelectedData(data);
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // 스크롤 방지
  };

  const closeModal = () => {
    setSelectedData(null);
    setIsOpen(false);
    document.body.style.overflow = ""; // 스크롤 해제
  };

  return { isOpen, selectedData, openModal, closeModal };
};

export default useModal;
