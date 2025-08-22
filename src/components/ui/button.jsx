export function Button({ className, children, ...props }) {
  return (
    <button
      {...props}
      className={
        "px-4 py-2 rounded-xl transition font-bold " +
        (className || "")
      }
    >
      {children}
    </button>
  );
}