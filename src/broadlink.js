class Broadlink {
  constructor(id) {
    this.id = id || this.generateId();
  }

  incrementId() {
    this.id = this.generateNextId(this.id);
  }

  generateId() {
    // 1 - 65500
    var id = Math.round(Math.random() * 35499);
    while (!Broadlink.idIsValid(id)) {
      id++;
    }
    return id;
  }

  generateNextId(startId) {
    startId++;
    while (!Broadlink.idIsValid(startId)) {
      startId++;
    }
    return startId;
  }

  getButtonCode(button, repeats = 200) {
    if(repeats < 50 || repeats > 255) {
      repeats = 200;
    }
    const header = "b2" + repeats.toString(16) + "260013";
    const id_bin = this.id.toString(2).padStart(16, '0');
    const btn_bin = button.toString(2).padStart(7, '0');
    var id_btn_bin = id_bin.concat(btn_bin);

    id_btn_bin = id_btn_bin.replace(/0/g, "0606");
    id_btn_bin = id_btn_bin.replace(/1/g, "0c");

    var hex_out = header + id_btn_bin;
    const pad_len = 32 - (hex_out.length - 24) % 32;

    hex_out = hex_out + ('').padStart(pad_len, '0');
    return this.hexToBase64(hex_out);
  }

  hexToBase64(hexstring) {
    return btoa(hexstring.match(/\w{2}/g).map(function (a) {
      return String.fromCharCode(parseInt(a, 16));
    }).join(""));
  }
}

Broadlink.buttons = {
  btn1: 0,
  btn2: 96,
  btn3: 120,
  btn4: 24,
  btn5: 108,
  btn6: 80,
  btn7: 48,
  btn8: 12,
  btn9: 72,
  btn10: 40,
  scn1: 90,
  scn2: 114,
  scn3: 10,
  scn4: 18,
  off: 106
};

Broadlink.idIsValid = function (id) {
  if(id) {
    const bin = id.toString(2);
    // console.log(bin, id);
    const totalone = bin.match(/1/g).length;
    return totalone % 2 == 1;
  } else {
    return false;
  }
}

export default Broadlink;