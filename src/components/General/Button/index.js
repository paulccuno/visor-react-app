import "./styles.css";

export default function Button({ ...props }) {
  const { className } = props;
  delete props.className;

  return (
    <>
      <button className={`Button ${className}`} {...props} />
    </>
  );
}
