import { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '@/pages/404';

interface Props {
  children: ReactNode;
}

export const RoutesWithNotFound: React.FC<Props> = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
