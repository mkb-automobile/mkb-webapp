import { values } from "lodash";
import React, { ChangeEvent, TextareaHTMLAttributes } from "react";

interface CustomInputProps {
  id: string;
  title?: string;
  inputType?: string;
  rows?: number;
  containerStyles?: string;
  containerStylesDiv?: string;
  textStyles?: string;
  value: string | number;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  required?: boolean;
}

const CustomInput = ({
  id,
  title,
  inputType,
  rows,
  containerStyles,
  containerStylesDiv,
  textStyles,
  value,
  handleChange,
  required,
}: CustomInputProps) => {
  const isTextArea = inputType === "textarea";
  return (
    <div className={`sm:col-span-3 ${containerStylesDiv} `}>
      <label htmlFor={id} className={`flex-1 ${textStyles}`}>
        {title || ""}
      </label>
      <div className="mt-2 flex-1">
        {isTextArea ? (
          <textarea
            id={id}
            name={id}
            rows={rows || 1}
            placeholder={title}
            value={value}
            onChange={handleChange}
            required={required}
            className={`${containerStyles}`}
          />
        ) : (
          <input
            id={id}
            name={id}
            type={inputType || "text"}
            placeholder={title || ""}
            value={value}
            onChange={handleChange}
            required={required}
            className={`${containerStyles}`}
          />
        )}
      </div>
    </div>
  );
};

export default CustomInput;
