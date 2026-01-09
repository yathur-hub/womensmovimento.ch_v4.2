
import React from 'react';

interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  href?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({ label, variant, onClick, className = '', href, target }) => {
  const baseStyles = "px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center inline-block cursor-pointer";
  const primaryStyles = "bg-[#FFD6AF] text-[#121212] hover:opacity-90 active:scale-95";
  const secondaryStyles = "bg-white text-[#121212] border border-[#C49E85] hover:bg-[#f8f8f8] active:scale-95";
  
  const styles = `${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={styles}>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {label}
    </button>
  );
};

export default Button;
