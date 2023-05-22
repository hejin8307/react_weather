import React from 'react';
import {useDispatch} from 'react-redux';
import {toggleDarkMode} from '../redux/DarkModeSlice';
import {IoGrid, IoLocationSharp} from 'react-icons/io5';
import {HiBell} from 'react-icons/hi';
import {CiSearch} from 'react-icons/ci';
import {BiSun, BiMoon} from 'react-icons/bi';

function Navbar() {
  const dispatch = useDispatch();

  return (
    <header className="flex items-center justify-between w-full">
      <div className="flex justify-between w-3/12">
        <button className="bg-lightgrey rounded-full p-4">
          <IoGrid />
        </button>
        <button className="bg-lightgrey rounded-full p-4">
          <HiBell />
        </button>
        <div className="flex items-center w-1/2">
          <IoLocationSharp size="24" />
          <p className="px-2 ">city name</p>
        </div>
      </div>
      {/* 검색 */}
      <form className="flex w-4/12">
        <button className="bg-lightgrey rounded-tl-3xl rounded-bl-3xl pl-4">
          <CiSearch size="24" />
        </button>
        <input
          type="text"
          className="w-full bg-lightgrey rounded-tr-3xl rounded-br-3xl outline-none py-2 placeholder:text-black indent-2"
          placeholder="Search city..."
          spellCheck="false"
        />
      </form>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onClick={() => dispatch(toggleDarkMode())}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
          <BiSun />
          <BiMoon />
        </div>
      </label>
    </header>
  );
}

export default Navbar;
