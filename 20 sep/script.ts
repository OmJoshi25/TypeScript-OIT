class mobile {
    preinstalled: string[] = ["Google","Camera","Calculator","Clock","Gallery","Calender","Contacts","Message","Settings"];
  constructor(
    public company: string,
    public price: number,
    public ram: number,
    public rom: number,
    public cam: number,
    public os: string,
    public battery: number,
    public processor: string
  ) {}
  DisplayDetails() {
    console.log(
      `Company: ${this.company}, Price: ${this.price}, RAM: ${this.ram}, ROM: ${this.rom}, Camera: ${this.cam}, OS: ${this.os}, Battery: ${this.battery}, Processor: ${this.processor}`
    );
  }
  InstallApp(...App: string[])/* ... creates App as an array */{
    this.preinstalled = [...this.preinstalled,...App]; /* on this line ... breaks the array into seperate items  */
  }
  Apps(){
    console.log(this.preinstalled);
  }
}

var S20 = new mobile("samsung", 42000, 8, 256, 50, "android", 5000, "mediatek");
S20.DisplayDetails();
S20.InstallApp("WhatsApp","Instagram","SnapChat","VLC","Netflix","Hotstar","Amazon Prime","Replit");
S20.InstallApp("Telegram","Facebook");
S20.Apps();