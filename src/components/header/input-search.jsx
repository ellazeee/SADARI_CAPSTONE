import React, { useRef } from "react";
import { useNavigate } from "react-router";

export const InputSearch = () => {
  const ref = useRef();
  const navigation = useNavigate();

  const handleSearch = (event) => {
    const keyword = ref.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      navigation(`/search/${keyword}`);
      ref.current.value = "";
    }
  };

  return (
    <>
      <div className="flex justify-end mb-5 mt-5">
        <div className="header relative">
            <input
            placeholder="Search here..."
            className="input p-2 h-8 w-56 focus:outline-pink-600 text-base pr-16 border"
            ref={ref}
            onKeyDown={handleSearch}
            />
            <button
            onClick={handleSearch}
            className="absolute bg-pink-600 text-white inset-y-0 right-0 items-center flex p-2"
            >Enter</button>
      </div>
      </div>
    </>
  );
};
