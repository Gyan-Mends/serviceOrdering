import React from "react";

export default function Graph({ height }) {
  return (
    <div className={`mt-10 bg-white rounded-md shadow-md ${height}`}>
      {/* You can use the 'h-' prefix from Tailwind CSS to set the height dynamically */}
      {/* For example, if height is '10', it will add 'h-10' class */}
    </div>
  );
}

