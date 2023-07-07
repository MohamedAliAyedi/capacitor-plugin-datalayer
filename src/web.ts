import { WebPlugin } from '@capacitor/core';
import { DatalayerPlugin } from './definitions';

export class DatalayerWeb extends WebPlugin implements DatalayerPlugin {
  constructor() {
    super({
      name: 'Datalayer',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const Datalayer = new DatalayerWeb();

export { Datalayer };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Datalayer);
