import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { buildLoginRedirectUrl } from 'librechat-data-provider';
import { useAuthContext } from '~/hooks';

export default function useAuthRedirect() {
  const { user, roles, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasChecked(true);
      if (isAuthenticated) {
        return;
      }

      navigate(buildLoginRedirectUrl(location.pathname, location.search, location.hash), {
        replace: true,
      });
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isAuthenticated, navigate, location]);

  // If authenticated, mark as checked immediately
  useEffect(() => {
    if (isAuthenticated) {
      setHasChecked(true);
    }
  }, [isAuthenticated]);

  return {
    user,
    roles,
    isAuthenticated,
  };
}
