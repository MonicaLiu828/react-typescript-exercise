// import { ReactNode } from "react";
interface Props1 {
  children: string;
  setAlert: (args: boolean) => void;
}

function Alert({ children, setAlert }: Props1) {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => {
          setAlert(false);
        }}
      ></button>
    </div>
  );
}

export default Alert;
