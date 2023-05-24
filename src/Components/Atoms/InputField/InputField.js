import React from 'react';
import './InputField.css';
import { GrSearch } from 'react-icons/gr';
import { MdKeyboardVoice } from 'react-icons/md';

export default function InputField({ onChange, onFocus, onBlur }) {
  return (
    <div className="wrapper">
    <div className="search-bar">
      <h3>AutoComplete Search Bar</h3>
      <input
        type="text"
        className="input-with-icon"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder="Search State"
      />
      <GrSearch className="icon search-icon" />
      <MdKeyboardVoice className="icon voice-icon" />
    </div>
    </div>
  );
}