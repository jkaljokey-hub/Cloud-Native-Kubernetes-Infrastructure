import React, { useEffect, useReducer, useState } from "react";
import Head from "./Head";


const initialState = {
  currentstate: 0,
  prevstate: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Update":
      return {
        prevstate: state.currentstate, // Store previous value before updating
        currentstate: action.payload, // Update current value
      };
    default:
      return state;
  }
};

const RootHead = () => {
  const [showHead, setShowHead] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const handleScroll = () => {
      dispatch({ type: "Update", payload: window.scrollY });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use effect to compare prevstate and currentstate
  useEffect(() => {
    if (state.prevstate > state.currentstate || state.currentstate < 150) {
      setShowHead(true);
    } else {
      setShowHead(false);
    }
  }, [state.currentstate, state.prevstate]);
//   useEffect(() => {
//     console.log("Prev:", state.prevstate, "Current:", state.currentstate, "ShowHead:", showHead);
//   }, [state.currentstate, state.prevstate, showHead]);
  
  return (
    <div>
      {showHead && (
        <div className="scroll-head">
          <Head />
        </div>
      )}
    </div>)
};

export default RootHead;
