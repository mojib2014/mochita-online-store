import React from "react";

export default function Input({ name, type, value, onChange }) {
  return (
    <input min="0" type={type} name={name} value={value} onChange={onChange} />
  );
}
