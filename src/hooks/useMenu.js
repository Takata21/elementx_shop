import { useState } from 'react';

export function useMenu() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return { show, handleShow };
}
