/**
 * @file react overlay event
 * 
 * @class Dispatcher
 */

class Dispatcher<TPayload> {
    _callbacks: {[key: string]: Array<Function>};

    constructor() {
        this._callbacks = {};
    }

    /**
     * Registers a callback
     */
    register(key, callback: (payload: TPayload) => void): void {
        let list = this._callbacks[key];

        if (!list) {
            list = this._callbacks[key] = [];
        }

        list.push(callback);
    }

    /**
     * Removes a callback based on its token.
     */
    unregister(key): void {
        delete this._callbacks[key];
    }

    /**
     * Dispatches a payload to all registered callbacks.
     */
    dispatch(key, payload: TPayload): void {
       const list = this._callbacks[key];

       if (list.length) {
           list.forEach(callback => {
               callback.call(null, payload);
           });
       }
    }
}

export default new Dispatcher();