import { appTools, defineConfig } from '@modern-js/app-tools';
import { garfishPlugin } from '@modern-js/plugin-garfish';

export default defineConfig({
  runtime: {
    router: true,
    masterApp: {
      apps: [
        {
          name: 'Sub',
          entry: 'http://localhost:8081',
          // activeWhen: '/table'
        },
      ],
    },
  },
  plugins: [appTools(), garfishPlugin()],
});
