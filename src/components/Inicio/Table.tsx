"use client";

import { useState } from "react";

type TableProps = {
  color: string;
  nombre: string;
  starred?: boolean;
  onToggle?: () => void;
};

const Table: React.FC<TableProps> = ({ color, nombre, starred = false, onToggle }) => {
  // controlled by parent via starred/onToggle
  const fill = starred ? "yellow" : "none";
  const stroke = starred ? "yellow" : "white";

  return (
    <div className={` relative w-100 h-30 ${color}`}>
      <strong className="absolute top-2 left-2 text-white">{nombre}</strong>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={onToggle}
        className="absolute bottom-2 right-2 cursor-pointer lucide lucide-star-icon lucide-star">
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
      </svg>
    </div>
  );
};

export default Table;
