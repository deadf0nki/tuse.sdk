import { Packet } from "./Packet";

export class PaymentPacket implements Packet {
  constructor(data: any, token: string) {
    this.token = token;
    this.data = data;
  }
  token: string = "";
  message: string = "pay";
  data: any;
  postback: string = "onPay";
}
