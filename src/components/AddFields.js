import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addField } from '../redux/actions';
import './AddFields.css';

const AddFields = () => {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.fields); 

  const [selectedCategory, setSelectedCategory] = useState('');
  const [showAddFieldButton, setShowAddFieldButton] = useState(false);
  const [showFieldTypeDropdown, setShowFieldTypeDropdown] = useState(false);
  const [showFieldList, setShowFieldList] = useState(false);
  const [field, setField] = useState({
    name: '',
    type: '',
    displayName: '',
    dataType: '',
    maxLength: '',
    validation: '',
    mandatory: false,
    data: '',
    options: [],
  });

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
    setShowAddFieldButton(selectedCategory === 'student');
    setShowFieldTypeDropdown(false);
    setField({
      name: '',
      type: '',
      displayName: '',
      dataType: '',
      maxLength: '',
      validation: '',
      mandatory: false,
      data: '',
      options: [],
    });
  };

  const handleAddFieldButton = () => {
    setShowFieldTypeDropdown(true);
    setShowAddFieldButton(false);
  };

  const handleAddField = () => {
    if (fields.length < 4) {
      dispatch(addField(field));
      setField({
        name: '',
        type: '',
        displayName: '',
        dataType: '',
        maxLength: '',
        validation: '',
        mandatory: false,
        data: '',
        options: [],
      });
      setShowFieldTypeDropdown(false);
      setShowAddFieldButton(true);
      setShowFieldList(true);
    }
  };

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setField({ ...field, type: selectedType });
  };

  const handleConfirm = () => {
    // Add logic for confirming the form data if needed
  };

  const handleReset = () => {
    setShowAddFieldButton(true);
    setShowFieldTypeDropdown(false);
    setShowFieldList(false);
    setField({
      name: '',
      type: '',
      displayName: '',
      dataType: '',
      maxLength: '',
      validation: '',
      mandatory: false,
      data: '',
      options: [],
    });
  };
  

  return (
    <div>
      <h2>Dynamic Data Collection</h2>

      <div>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select</option>
          <option value="student">Student</option>
          <option value="salaried">Salaried</option>
          <option value="business">Business</option>
        </select>
      </div>

      {showAddFieldButton && (
        <div>
          <button onClick={handleAddFieldButton}>Add Field</button>
        </div>
      )}

      {showFieldTypeDropdown && (
        <div>
          <label>Select Field Type</label>
          <select
            value={field.dataType}
            onChange={(e) => setField({ ...field, dataType: e.target.value })}
          >
            <option value="">Select Field Type</option>
            <option value="Text">Text Box</option>
            <option value="Date">Date</option>
            <option value="Dropdown">Dropdown</option>
          </select>
          {field.dataType === 'Text' && (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <div style={{ marginRight: '20px' }}>
      <label>Field Display Name:</label>
      <input
        type="text"
        value={field.displayName}
        onChange={(e) => setField({ ...field, displayName: e.target.value })}
      />
    </div>

    <div style={{ marginRight: '20px' }}>
      <label>Field Data Type:</label>
      <input
        type="text"
        value={field.dataType}
        onChange={(e) => setField({ ...field, dataType: e.target.value })}
      />
    </div>

    <div style={{ marginRight: '20px' }}>
      <label>Field Max Length Allowed:</label>
      <input
        type="number"
        value={field.maxLength}
        onChange={(e) => setField({ ...field, maxLength: e.target.value })}
      />
    </div>

    <div style={{ marginRight: '20px' }}>
      <label>Mandatory:</label>
      <select
        value={field.mandatory}
        onChange={(e) => setField({ ...field, mandatory: e.target.value })}
      >
        <option value={false}>No</option>
        <option value={true}>Yes</option>
      </select>
    </div>

    <div>
      <label>Field Data:</label>
      <input
        type="text"
        value={field.data}
        onChange={(e) => setField({ ...field, data: e.target.value })}
      />
    </div>
  </div>
)}
{field.dataType === 'Date' && (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <div style={{ marginRight: '20px' }}>
      <label>Field Display Name:</label>
      <input
        type="text"
        value={field.displayName}
        onChange={(e) => setField({ ...field, displayName: e.target.value })}
      />
    </div>

    <div style={{ marginRight: '20px' }}>
      <label>Field Data Type:</label>
      <input
        type="text"
        value={field.dataType}
        onChange={(e) => setField({ ...field, dataType: e.target.value })}
      />
    </div>

    <div style={{ marginRight: '20px' }}>
      <label>Date Range Validation:</label>
      {/* Add date range validation input fields here */}
    </div>

    <div style={{ marginRight: '20px' }}>
      <label>Mandatory:</label>
      <select
        value={field.mandatory}
        onChange={(e) => setField({ ...field, mandatory: e.target.value })}
      >
        <option value={false}>No</option>
        <option value={true}>Yes</option>
      </select>
    </div>

    <div>
      <label>Field Data:</label>
      <input
        type="text"
        value={field.data}
        onChange={(e) => setField({ ...field, data: e.target.value })}
      />
    </div>
  </div>
)}

{field.dataType === 'Dropdown' && (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <div style={{ marginRight: '20px' }}>
      <label>Field Display Name:</label>
      <input
        type="text"
        value={field.displayName}
        onChange={(e) => setField({ ...field, displayName: e.target.value })}
      />
    </div>

    <div style={{ marginRight: '20px' }}>
      <label>Field Data Type:</label>
      <input
        type="text"
        value={field.dataType}
        onChange={(e) => setField({ ...field, dataType: e.target.value })}
      />
    </div>

    <div style={{ marginRight: '20px' }}>
      <label>Field Validation:</label>
      <input
        type="text"
        value={field.validation}
        onChange={(e) => setField({ ...field, validation: e.target.value })}
      />
    </div>

    <div style={{ marginRight: '20px' }}>
      <label>Mandatory:</label>
      <select
        value={field.mandatory}
        onChange={(e) => setField({ ...field, mandatory: e.target.value })}
      >
        <option value={false}>No</option>
        <option value={true}>Yes</option>
      </select>
    </div>

    <div>
      <label>Field Data:</label>
      <select
        value={field.data}
        onChange={(e) => setField({ ...field, data: e.target.value })}
      >
        <option value="IT">IT</option>
        <option value="CSE">CSE</option>
        <option value="Mech">Mech</option>
        <option value="ECE">ECE</option>
        <option value="EEE">EEE</option>
      </select>
    </div>
  </div>
)}
          <button onClick={handleAddField}>Confirm</button>
        </div>
      )}

      {fields.length === 4 && <p>You have reached the maximum limit of 4 fields.</p>}

     
      {showFieldList && fields.length > 0 && (
        <div>
          <h3>List of Added Fields:</h3>
          <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid #000' }}>
            <thead>
              <tr style={{ border: '1px solid #000' }}>
                <th style={{ border: '1px solid #000' }}>No.</th>
                <th style={{ border: '1px solid #000' }}>Field Name</th>
                <th style={{ border: '1px solid #000' }}>Field Date Type</th>
                <th style={{ border: '1px solid #000' }}>Field Validations</th>
                <th style={{ border: '1px solid #000' }}>Field Data</th>
                <th style={{ border: '1px solid #000' }}>Is Mandatory</th>
              </tr>
            </thead>
            <tbody>
              {fields.map((addedField, index) => (
                <tr key={index} style={{ border: '1px solid #000' }}>
                  <td style={{ border: '1px solid #000' }}>{index + 1}</td>
                  <td style={{ border: '1px solid #000' }}>{addedField.displayName}</td>
                  <td style={{ border: '1px solid #000' }}>{addedField.dataType}</td>
                  <td style={{ border: '1px solid #000' }}>{addedField.validation}</td>
                  <td style={{ border: '1px solid #000' }}>{addedField.data}</td>
                  <td style={{ border: '1px solid #000' }}>{addedField.mandatory ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showFieldList && fields.length > 0 && (
        <div style={{ marginTop: '30px' }}>
          <button onClick={handleConfirm} style={{ marginRight: '10px' }}>
            Confirm
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default AddFields;