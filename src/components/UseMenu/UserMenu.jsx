import { LoginModal } from 'components/LoginModal/LoginModal';
import { LogoutModal } from 'components/LogoutModal/LogoutModal';

export const UserMenu = () => {
  return (
    <div>
      <LoginModal />
      <LogoutModal />
    </div>
  );
};
