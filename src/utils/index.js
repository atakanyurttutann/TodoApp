export const onClickOutside = (ref, handleClick) => {
  const listener = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      handleClick(event);
    }
  };

  document.addEventListener("mousedown", listener);
  document.addEventListener("touchstart", listener);

  return () => {
    document.removeEventListener("mousedown", listener);
    document.removeEventListener("touchstart", listener);
  };
};
