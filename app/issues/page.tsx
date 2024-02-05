import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <button
        className=" hover:bg-violet-800 
      shadow-md cursor-pointer bg-violet-700 px-3 py-2 rounded-md text-white"
      >
        <Link href="/issues/new">New Issue</Link>
      </button>
    </div>
  );
};

export default page;
