import {ClusterWS} from '../../index';
import {MessageFactory} from '../messages/messages';
export class Channel {
    constructor(public channel: string, public client: ClusterWS) {
        this.client.webSocket.send(MessageFactory.internalMessage('subscribe', this.channel));
    }

    watch(fn: any) {
        this.client.channels[this.channel] = fn;
        return this;
    }

    publish(data: any) {
        this.client.webSocket.send(MessageFactory.publishMessage(this.channel, data));
        return this;
    }
}