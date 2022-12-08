import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/reducer";
const Greeting = () => {
  const greetingList = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const refresh = () => {
    window.location.reload(false);
  }

  return (
    <div>
         <p>{greetingList.description}</p>
         <button onClick={refresh}> Display another greeting message</button>
        </div>
  );
};

export default Greeting;