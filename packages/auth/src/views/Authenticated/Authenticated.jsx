import React from 'react';

import { useAuth } from '../../hooks/auth';

const Authenticated = () => {
  const { currentUser } = useAuth();

  return (
    <div className="authenticated">
      <div className="authenticated__content">
        <h2>Você está logado, na aplicação Auth.</h2>

        <div>
          <label>Name</label>: {currentUser?.name}
        </div>

        <div>
          <label>Email</label>: {currentUser?.email}
        </div>
      </div>
    </div>
  );
};

export default Authenticated;
