import {check, sleep} from 'k6';
import {Nats} from 'k6/x/nats';

const natsConfig = {
    url: 'tls://connect.ngs.global',
    creds_path: '/path/to/my-user.creds',  // TODO change this to the path of your user credentials file
};

const caller = new Nats(natsConfig);

export default function () {
    const payload = JSON.stringify({client_id: "678" });
    const message = caller.request('customer.balance', payload, {})
    console.log(message);
}

export function teardown() {
    caller.close();
}
