import * as React from 'react';
import app from 'Firebase/Client';
import CircularProgress from '@material-ui/core/CircularProgress';

const Auth = React.createContext({});

const AuthContext: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<firebase.default.User | null>(null);
  const [showChild, setShowChild] = React.useState<boolean>(false);

  React.useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setUser(user);
      setShowChild(true);
    });
  }, []);

  if (!showChild) {
    return <CircularProgress />;
  } else {
    return <Auth.Provider value={{ user }}>{children}</Auth.Provider>;
  }
};

export { Auth, AuthContext };
