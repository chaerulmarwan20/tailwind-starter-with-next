const defaultClass =
  "inline-flex justify-center items-center px-4 h-10 rounded-lg bg-gradient-to-br text-white focus:outline-none focus:ring";

const primary = (props) => {
  const { children, className } = props;
  return (
    <button
      type="button"
      className={`${defaultClass} ${
        className && className
      } from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:ring-blue-300`}
    >
      {children}
    </button>
  );
};

const danger = (props) => {
  const { children, className } = props;
  return (
    <button
      type="button"
      className={`${defaultClass} ${
        className && className
      } from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 focus:ring-red-300`}
    >
      {children}
    </button>
  );
};

const success = (props) => {
  const { children, className } = props;
  return (
    <button
      type="button"
      className={`${defaultClass} ${
        className && className
      } from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 focus:ring-green-300`}
    >
      {children}
    </button>
  );
};

export { primary, danger, success };
