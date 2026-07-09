import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../../NotFound/NotFound';

const GameJam1001 = lazy(() => import('./GameJam1001'));
const GameJam1010 = lazy(() => import('./GameJam1010'));
const LoginPlaystation = lazy(() => import('./login-playstation/LoginPlaystation'));

const hashString = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return hash.toString();
};

const SecretGameJamLoader: React.FC = () => {
  const { editionId } = useParams<{ editionId: string }>();

  if (!editionId) return <NotFound />;

  const hashed = hashString(editionId);

  if (hashed === '1507424') {
    return (
      <Suspense fallback={<div style={{ backgroundColor: '#000', width: '100vw', height: '100vh' }} />}>
        <GameJam1001 />
      </Suspense>
    );
  }

  if (hashed === '1507454') {
    return (
      <Suspense fallback={<div style={{ backgroundColor: '#000', width: '100vw', height: '100vh' }} />}>
        <GameJam1010 />
      </Suspense>
    );
  }

  if (hashed === '-2130616548') {
    return (
      <Suspense fallback={<div style={{ backgroundColor: '#000', width: '100vw', height: '100vh' }} />}>
        <LoginPlaystation />
      </Suspense>
    );
  }

  return <NotFound />;
};

export default SecretGameJamLoader;
