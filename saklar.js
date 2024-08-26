function saklar(action, lamp) {
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    if (toggle1.checked) {
        lampu1.src = "assets/images/on.png";
    } else {
        lampu1.src = "assets/images/off.png";
    }

    if (toggle2.checked) {
        lampu2.src = "assets/images/on.png";
    } else {
        lampu2.src = "assets/images/off.png";
    }

    if (toggle3.checked) {
        lampu3.src = "assets/images/on.png";
    } else {
        lampu3.src = "assets/images/off.png";
    }

    //console.log('testing', toggle.checked);

    

    // if (action == "on") {
    //     // nyala
    //     if(lamp == 1) {
    //         lampu1.src = "assets/images/on.png";
    //     }
    //     if(lamp == 2) {
    //         lampu2.src = "assets/images/on.png";
    //     }
    //     if(lamp == 3) {
    //         lampu3.src = "assets/images/on.png";
    //     }
    // }
    // if (action == "off") {
    //     // mati
    //     if(lamp == 1) {
    //         lampu1.src = "assets/images/off.png";
    //     }
    //     if(lamp == 2) {
    //         lampu2.src = "assets/images/off.png";
    //     }
    //     if(lamp == 3) {
    //         lampu3.src = "assets/images/off.png";
    //     }
    // }

}