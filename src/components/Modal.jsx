import { useEffect } from 'react';
import { useState } from 'react';

const Modal = () => {
  const [lastUpdatedDate, setlastUpdatedDate] = useState(null);

  useEffect(() => {
    setlastUpdatedDate(console.log('24.April.2024'));
    //   console.log('work my first useEffect');
  }, []);

  console.log('render Modal', lastUpdatedDate);

  // useEffect(() => {
  //   console.log('Modal h1');
  // });

  return <h2>Modal</h2>;
};
export default Modal;
