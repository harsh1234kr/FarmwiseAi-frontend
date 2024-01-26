import React from 'react';
import { useSelector } from 'react-redux';

const DisplayFields = () => {
  const fields = useSelector((state) => state.fields);

  return (
    <div>
      <h2>Screen For Data Collection</h2>
      {fields.length === 0 ? (
        <p>No fields to display.</p>
      ) : (
        <form>
          {fields.map((field, index) => (
            <div key={index}>
              <label>{field.displayName}:</label>
              {field.dataType === 'Text' ? (
                <input type="Text" name={field.name} value={field.data} />
              ) : field.dataType === 'Date' ? (
                <input type="Date" name={field.name} value={field.data} />
              ) : field.dataType === 'Dropdown' ? (
                <select name={field.name} value={field.data}>
                  {field.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : null}
            </div>
          ))}
        </form>
      )}
    </div>
  );
};

export default DisplayFields;
