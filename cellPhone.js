class CellPhone {
    name;
    phoneNumber;
    inbox;
    sent;
    batery;
    ON;

    constructor(name, phoneNumber) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.inbox = [];
        this.sent = [];
        this.batery = 75;
        this.monitor = 'Off';
        this.ON = false;
        allContact.push([this.phoneNumber, this]);
    }

    power() {
        if (this.ON) {
            console.log(this.name + ' turn off');
            this.ON = false;
            this.monitor = 'Off';
        } else {
            this.ON = true;
            console.log(this.name + ' turn on');
            this.monitor = 'Ready';
        }
    }

    charge(){
        alert('Charging...');
        this.batery = 100;
    }

    sendMessage() {
        this.batery -= 3;
        let msg = prompt('Enter text message:');
        let receiverNumber = prompt('Enter receiver\'s number: ');
        this.sent.push({
            receiver: receiverNumber,
            content: msg,
        });
        console.log('this.sent' + this.sent);

        let receiverCellPhone = null;
        for (let i = 0; i < allContact.length; i++) {
            let number = allContact[i][0];
            let phone = allContact[i][1];
            if (receiverNumber == number) {
                receiverCellPhone = phone;
                break;
            }
        }
        if (receiverCellPhone == null){
            alert('Phone number not exist');
        } else {
            receiverCellPhone.monitor = 'New message!!!';
            receiverCellPhone.inbox.push({
                sender: this.phoneNumber,
                content: msg,
            });
        }
    }

    checkInbox() {
        this.batery -= 2;
        let display = `Inbox\n`;
        display += `from | message\n`;
        for (let i = this.inbox.length - 1; i >= 0; i--) {
            // console.log(this.inbox[i]);
            let number = this.inbox[i].sender;
            let msg = this.inbox[i].content;
            display += `${number} | ${msg}`;
        }
        // console.log(display);
        this.monitor = display;
    }

    checkSent() {
        this.batery -= 2;
        let display = `Sent\n`;
        display += `to | message\n`;
        for (let i = this.sent.length - 1; i >= 0; i--) {
            let number = this.sent[i].receiver;
            let msg = this.sent[i].content;
            display += `${number} | ${msg}\n`;
        }
        // console.log(display);
        this.monitor = display;
    }

}