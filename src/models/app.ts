import { makeAutoObservable } from 'mobx';
import { RootStore } from '@/store';

interface State {
  theme: 'light' | 'dark';
}

const initState: State = {
  theme: 'dark',
};

export class App {
  setLoading: (value: boolean, key?: string) => void;
  updateState: (data: Partial<State>) => void;
  resetState: (data?: Partial<State>) => void;
  state: State = initState;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.setLoading = (value: boolean, key = 'app') => {
      rootStore.setLoading(value, key);
    };

    this.resetState = (data: Partial<State> = {}) => {
      this.state = { ...initState, ...data };
    };

    this.updateState = (data) => {
      this.state = { ...this.state, ...data };
    };
  }
}
