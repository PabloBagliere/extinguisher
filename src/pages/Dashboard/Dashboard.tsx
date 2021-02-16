import * as React from 'react';
import { useLocation } from 'wouter';
import { Auth } from 'Context/userContext';
import ActionDashboard from 'Component/ActionDashboard';

const Dashboard: React.FC = () => {
  const ContextUser = React.useContext(Auth);
  const [, navigate] = useLocation();

  React.useEffect(() => {
    if (!ContextUser?.user) {
      navigate('/');
    }
  }, [ContextUser?.user, navigate]);

  return (
    <>
      <div>Dashboard</div>
      <ActionDashboard />
    </>
  );
};

export default Dashboard;
