export function Container({ children, style, className }) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
