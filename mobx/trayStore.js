// @flow
import { observable, action } from 'mobx';

class ObservableTrayStore {
    @observable contents = []

    @action addItem = item => contents.push(item);

    @action addSet = set => contents.push(set);

    @action removeItem = item => contents.splice(item, 1);
}
