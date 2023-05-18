import React from 'react';

const Options = ({ options, selectedOptionIndex, handleOptionSelect }) => {
  return (
    <div className="options">
      {options.map((option, index) => (
        <div key={index} className="option">
          <label>
            <input
              type="radio"
              name="option"
              checked={selectedOptionIndex === index}
              onChange={() => handleOptionSelect(index)}
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Options;
