import { useModuleApps } from '@modern-js/plugin-garfish/runtime';

const Index = () => {
  const { Sub } = useModuleApps();

  return (
    <div>
      <Sub />
    </div>
  );
};

export default Index;
