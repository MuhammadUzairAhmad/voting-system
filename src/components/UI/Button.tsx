interface ButtonProps {
  variant?: 'light' | 'blue';
  onClick?: () => void;
  children: React.ReactNode;
  width?: string;
}

const Button = ({ variant = 'light', onClick, children , width = "w-fit"}: ButtonProps) => {
  const baseStyles = "text-md font-semibold px-4 py-2 rounded-md cursor-pointer";
  
  const variantStyles = {
    light: "text-light-bluetext dark:text-dark-bluetext hover:bg-light-background2 dark:hover:bg-dark-background2",
    blue: "text-white bg-light-bluetext dark:bg-dark-bluetext hover:bg-opacity-80 dark:hover:bg-opacity-80"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${width}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 