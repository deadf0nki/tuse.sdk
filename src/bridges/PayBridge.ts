import Tuse from "../Tuse";
import { Packet } from "../data/Packet";
import { PaymentPacket } from "../data/PaymentPacket";
import { CommonBridge } from "./CommonBridge";

export class PaymentBridge extends CommonBridge {
  execute(data: any, callback: any): Promise<void> {
    return this.Pay(data, callback);
  }

  private async Pay(data: any, onPay: any) {
    const packet = new PaymentPacket(data, Tuse.apiKey);
    this.window.TusePay.postMessage(JSON.stringify(packet));
    this.listen(packet.postback, onPay);
  }
}
