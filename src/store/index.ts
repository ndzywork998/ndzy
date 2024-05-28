import { makeAutoObservable } from 'mobx';
import { setupStores } from './setupStores';
import { App } from '@/models/app';

export class RootStore {
  loading: {
    [k: string]: boolean;
  } = { loading: false };
  setLoading: (value: boolean, key: string) => void;
  app: App;

  constructor() {
    this.app = new App(this);

    makeAutoObservable(this);

    this.setLoading = (value, key = 'loading') => {
      this.loading[key] = value;
    };
  }
}

export const { StoreContext, useStores, withStores } = setupStores<RootStore>(RootStore);
