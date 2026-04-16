import React from 'react'


const STYLES = {
  overdue: "bg-red-100 text-red-600",
  "almost due": "bg-yellow-100 text-yellow-700",
  "on-track": "bg-green-100 text-green-700",
};

const LABELS = {
  overdue: "Overdue",
  "almost due": "Almost Due",
  "on-track": "On-Track",
};

const StatusBadge = ( {status, className= ''}) => {

    const style = STYLES[status] || STYLES["on-track"];
    const label = LABELS[status] || status;
  return (
    <span
      className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${style} ${className}`}
    >
      {label}
    </span>
  );
}

export default StatusBadge