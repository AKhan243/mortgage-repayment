import React from "react";

function FormInputGroup({
                          text,
                          icon,
                          placeholder,
                          value,
                          onInput,
                          onkeyup,
                          readOnly = false,
                        }) {
  return (
    <div className="input-group">
      <span className="input-group-text ">
        {text} {icon}
      </span>
      <input
        type="number"
        value={value}
        placeholder={placeholder}
        onInput={onInput}
        onKeyUp={onkeyup}
        readOnly={readOnly}
      />
    </div>
  );
}

export default FormInputGroup;
