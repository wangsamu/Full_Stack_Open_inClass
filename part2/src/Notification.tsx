import React from 'react';

interface NotificationProps {
  errorMessage: string | null;
}
export const Notification: React.FC<NotificationProps> = ({ errorMessage }) => {
  if (!errorMessage) {
    return null;
  }

  return <div className='notification'>{errorMessage}</div>;
};
