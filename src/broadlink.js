class Broadlink {
  constructor(id) {
    this.id = id || this.generateId();
  }

  incrementId(dimmer = false) {
    this.id = this.generateNextId(this.id, dimmer);
  }

  generateId() {
    // valid ID: 1 - 65500
    // valid ID for dimmers : 16384 - 32767
    // generate a remote ID between 16384 and 30000
    var id = Math.round(Math.random() * 13616) + 16384;
    while (!Broadlink.idIsValid(id)) {
      id++;
    }
    return id;
  }

  generateNextId(startId, dimmer) {
    startId++;
    while (!Broadlink.idIsValid(startId, dimmer)) {
      startId++;
    }
    return startId;
  }

  getButtonCode(button, remoteModel, repeats = 200) {
    if (remoteModel == "rmpro")
      return this.getButtonCodeRmPro(button, repeats);
    else if (remoteModel == "rm4pro")
      return this.getButtonCodeRm4Pro(button, repeats);
    else
      throw "code generation for remote model " + remoteModel + " not supported!";
  }

  getButtonCodeRmPro(button, repeats = 200) {
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

  getButtonCodeRm4Pro(button, repeats = 200) {
    if(repeats < 50 || repeats > 255) {
      repeats = 200;
    }
    const header = "b2" + repeats.toString(16) + "b004009f06002004"; // header for rm4pro
    const id_bin = this.id.toString(2).padStart(16, '0');
    const btn_bin = button.toString(2).padStart(7, '0');
    var id_btn_bin = id_bin.concat(btn_bin);

    id_btn_bin = id_btn_bin.replace(/0/g, "0606");
    id_btn_bin = id_btn_bin.replace(/1/g, "0c");
    id_btn_bin = "13" + id_btn_bin;

    var hex_out = header + id_btn_bin.repeat(15);
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
  off: 106,
  dimToggle: 8,
  dimUp: 16,
  dimDown: 56
};

/**
 * When transformed in binary:
 * - 4 button remotes have an even number of 1's
 * - full remotes have an odd number of 1's
 * 
 * Dimmer-able remotes have special IDs
 * Assumption:
 * - between 16399 and 32767
 * - have at least 5 1's
 */
Broadlink.idIsValid = function (id, dimmer = false) {
  if(id) {
    const bin = id.toString(2);
    if(id < 16399 || id > 32767) {
      return false;
    }
    const totalone = bin.match(/1/g).length;
    if(totalone < 5) {
      return false;
    }
    if(dimmer) {
      return totalone % 2 == 0;
    } else {
      return totalone % 2 == 1;
    }
  } else {
    return false;
  }
}

export default Broadlink;

/**
Remote id's that work (*) or not with dimmer switches.

ID     Binary             Working
7400   001110011101000 (7)
12871  011001001000111 (7)
16384  100000000000000 (1)
16387  100000000000011 (3)
16389  100000000000101 (3)
16390  100000000000110 (3)
16396  100000000001100 (3)
16399  100000000001111 (5) *
16408  100000000011000 (3) 
16500  100000001110100 (5) *
17084  100001010111100 (7) *
18083  100011010100011 (7) *
18285  100011101101101 (9) *
18286  100011101101110 (9) *
18288  100011101110000 (7) *
26339  110011011100011 (9) *
26560  110011111000000 (7) *
26623  110011111111111 (13)*
32764  111111111111100 (13)*
32765  111111111111101 (14)DIMMER
32767  111111111111111 (15)*
55555 1101100100000011 (7)

*/