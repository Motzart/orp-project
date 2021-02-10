import {
    observable, action, makeAutoObservable,
} from 'mobx';

class Store {
    configCoordinate = {
        region: '',
        polygon: [],
        codePlus: null,
        square: 0,
        coordinate: {longitude: '', latitude: ''}
    };

    constructor(configCoordinate = {
                    region: '',
                    polygon: [],
                    codePlus: null,
                    square: 0,
                    coordinate: {longitude: '', latitude: ''}
                },
    ) {
        makeAutoObservable(this, {
            configCoordinate: observable,
            setConfigCoordinate: action,
        });
        this.configCoordinate = configCoordinate;
    }

    setConfigCoordinate(obj) {
        this.configCoordinate = obj;
    }

}

export default new Store();
