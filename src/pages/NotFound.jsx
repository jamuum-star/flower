import React from 'react'

function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center text-white font-bold">
      <img
        className="w-[800px] h-[600px] object-cover rounded-3xl"
        src="/not.gif"
        alt="Product not found"
      />
    </div>
  );
}

export default NotFound
