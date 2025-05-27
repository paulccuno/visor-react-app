import { forwardRef } from "react";

import "./styles.css";

function Input({ ...props }, ref) {
  const { label, error, className } = props;
  delete props.className;
  delete props.label;

  const ErrorMessage = ({ text = "" }) => (
    <p className="Error-message">{text}</p>
  );

  return (
    <>
      <div className={`Input ${className}`}>
        <label className={error && "error"}>{label}</label>
        <input {...props} ref={ref} />
        <ErrorMessage text={error} />
      </div>
    </>
  );
}

export default forwardRef(Input);
