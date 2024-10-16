import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset"; // Tornar `type` opcional
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, type = "button", onClick }) => {
    return (
        <button className="button" type={type} onClick={onClick}>
            {children}
        </button>
    );
};
