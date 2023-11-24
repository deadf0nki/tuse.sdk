export class CommonBridge {
  window: any;
  constructor(window: any) {
    this.window = window;
  }
  async execute(data: any, callback:any) {

  }
  async listen(event: string, callback: any) {
    this.window[event] = callback;
  }
}
