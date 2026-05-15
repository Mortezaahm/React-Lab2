import type { ReactNode } from "react"
type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger"
  onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void
  type?: "button" | "submit" | "reset"
}

function Button({
  children,
  variant = "primary",
  onClick,
  type = "button"
} : ButtonProps) {
  return (
    <button
      type={type}
      className={`btn btn--${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
