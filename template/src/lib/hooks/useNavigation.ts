import { useState } from "react";

const useNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return { isOpen, toggleOpen };
};

export default useNavigation;
