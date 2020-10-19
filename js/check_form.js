const checkForm = () => {

    let uname = document.querySelector("#nameF");
    let uphone = document.querySelector("#phoneF");
    let uemail = document.querySelector("#emailF");
    let usubject = document.querySelector("#subjectF");
    let utext = document.querySelector("#text_id");
    let errn = document.querySelector("#err1");
    let errp = document.querySelector("#err2");
    let erre = document.querySelector("#err3");
    let errs = document.querySelector("#err4");
    let errt = document.querySelector("#err5");


    if (uname.value == "") {
        errn.innerHTML = "* Please Enter Name!";
        errn.style.color = "red";
        uname.style.boxShadow = "0 0 5px red";
    } else {
        errn.innerHTML = "";
        uname.style.boxShadow = "none";
    }
    if (uphone.value == "" || isNaN(uphone.value) && uphone.value.length != "9") {
        errp.innerHTML = "* Please Enter Valid Phone Number!";
        errp.style.color = "red";
        uphone.style.boxShadow = "0 0 5px red";
    } else {
        errp.innerHTML = "";
        uphone.style.boxShadow = "none";
    }
    if (uemail.value == "" || uemail.value.indexOf("@") == -1 || uemail.value.indexOf(".") == -1 || uemail.value.indexOf("@") == 0 || uemail.value.indexOf(".") == 0) {
        erre.innerHTML = "* Please Enter Email!"
        erre.style.color = "red";
        uemail.style.boxShadow = "0 0 5px red";
    } else {
        erre.innerHTML = "";
        uemail.style.boxShadow = "none";
    }
    if (usubject.value == "") {
        errs.innerHTML = "* Please Enter Subject!";
        errs.style.color = "red";
        usubject.style.boxShadow = "0 0 5px red";
    } else {
        errs.innerHTML = "";
        usubject.style.boxShadow = "none";
    }
    if (utext.value == "") {
        errt.innerHTML = "* Please Enter Subject!";
        errt.style.color = "red";
        utext.style.boxShadow = "0 0 5px red";
    } else {
        errt.innerHTML = "";
        utext.style.boxShadow = "none";
    }
}