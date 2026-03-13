"use client";

import { Star } from "lucide-react";

type TableProps = {
  color: string;
  nombre: string;
  starred?: boolean;
  onToggle?: () => void;
};

const Table: React.FC<TableProps> = ({
  color,
  nombre,
  starred = false,
  onToggle,
}) => {
  // controlled by parent via starred/onToggle
  const fill = starred ? "yellow" : "none";
  const stroke = starred ? "yellow" : "white";

  return (
    <div className={` relative w-100 h-30 ${color}`}>
      <strong className="absolute top-2 left-2 text-white">{nombre}</strong>
      <Star
        size={20}
        fill={fill}
        stroke={stroke}
        onClick={onToggle}
        className="absolute bottom-2 right-2 cursor-pointer"
      />
    </div>
  );
};

export default Table;
