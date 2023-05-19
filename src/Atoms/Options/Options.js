import React from 'react';
import styles from './Options.module.css'

const Options = ({ options, selectedOptionIndex, handleOptionSelect }) => {
  return (
    <div className={styles.options}>
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
