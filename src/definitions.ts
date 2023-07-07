declare module '@capacitor/core' {
  interface PluginRegistry {
    Datalayer: DatalayerPlugin;
  }
}

export interface DatalayerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
