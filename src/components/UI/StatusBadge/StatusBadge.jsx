import React from 'react'


const STYLES = {
  overdue: "bg-[#EF4444] text-white",
  "almost due": "bg-[#244D3F] text-white",
  "on-track": "bg-[#EFAD44] text-white",
};

const LABELS = {
  "overdue": "Overdue",
  "almost due": "Almost Due",
  "on-track": "On-Track",
};

const StatusBadge = ( {status, className= ''}) => {

    const style = STYLES[status] || STYLES["on-track"];
    const label = LABELS[status] || status;
  return (
    <span
      className={`inline-block text-[12px] font-medium px-2 py-1.5 rounded-full ${style} ${className}`}
    >
      {label}
    </span>
  );
}

export default StatusBadge