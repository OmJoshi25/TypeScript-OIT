var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var mobile = /** @class */ (function () {
    function mobile(company, price, ram, rom, cam, os, battery, processor) {
        this.company = company;
        this.price = price;
        this.ram = ram;
        this.rom = rom;
        this.cam = cam;
        this.os = os;
        this.battery = battery;
        this.processor = processor;
        this.preinstalled = ["Google", "Camera", "Calculator", "Clock", "Gallery", "Calender", "Contacts", "Message", "Settings"];
    }
    mobile.prototype.DisplayDetails = function () {
        console.log("Company: ".concat(this.company, ", Price: ").concat(this.price, ", RAM: ").concat(this.ram, ", ROM: ").concat(this.rom, ", Camera: ").concat(this.cam, ", OS: ").concat(this.os, ", Battery: ").concat(this.battery, ", Processor: ").concat(this.processor));
    };
    mobile.prototype.InstallApp = function () {
        var App = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            App[_i] = arguments[_i];
        }
        this.preinstalled = __spreadArray(__spreadArray([], this.preinstalled, true), App, true); /* on this line ... breaks the array into seperate items  */
    };
    mobile.prototype.Apps = function () {
        console.log(this.preinstalled);
    };
    return mobile;
}());
var S20 = new mobile("samsung", 42000, 8, 256, 50, "android", 5000, "mediatek");
S20.DisplayDetails();
S20.InstallApp("WhatsApp", "Instagram", "SnapChat", "VLC", "Netflix", "Hotstar", "Amazon Prime", "Replit");
S20.InstallApp("Telegram", "Facebook");
S20.Apps();
