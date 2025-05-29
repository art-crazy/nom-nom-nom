import React from 'react';

interface IconProps {
  className?: string;
}

export const OkIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24"
    className={className}
  >
    <path 
      fill="currentColor" 
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.5 14.5c-.2.2-.5.3-.8.3-.3 0-.6-.1-.8-.3l-1.5-1.5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1.5 1.5c.4.4.4 1 0 1.4zm-3.5-3.5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-.4.4-1 .4-1.4 0zm-3.5-3.5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-.4.4-1 .4-1.4 0zm-3.5-3.5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-.4.4-1 .4-1.4 0z"
    />
  </svg>
); 