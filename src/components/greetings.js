import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greetingSlice';

const Greeting = () => {
  const greet = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  return (
    <div className="center">
      <h1>{greet.greeting.message}</h1>
    </div>
  );
};

export default Greeting;
