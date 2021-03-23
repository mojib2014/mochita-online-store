import React from "react";

export default function Button({ disabled, className, onClick, children }) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
