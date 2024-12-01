import React from 'react';

interface SubscribeButtonProps {
  email: string;
  onSubscribe: (email: string) => void;
}

const BusinessSubscribeButton: React.FC<SubscribeButtonProps> = ({ email, onSubscribe }) => {
  const handleClick = () => {
    onSubscribe(email);
  };

  return (
    <button 
      type="button"
      tabIndex={0}
      className="py-3 px-4 inline-flex justify-center items-center gap-x-2 rounded-2xl bg-orange-400"
      style={{ pointerEvents: 'auto' }}
      onClick={handleClick}
    >
      <span className="font-semibold text-md text-white pt-1">Request demo</span>
    </button>
  );
};

export default BusinessSubscribeButton;