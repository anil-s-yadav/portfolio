/*================== Tyoing Animation ==================*/

        var typed = new Typed(".typing", {
            strings:[" Android App Devlopement","Java ","Android Studio"],
            typeSpeed: 50,
            loop: true,
            backDelay: 900,
            backSpeed: 30,
        });

/*================== Mail service ==================*/

    function sendEmail() {
        let name1=document.getElementById("name").value;
        let Email1=document.getElementById("Email").value;
        let subject1=document.getElementById("subject").value;
        let massage1=document.getElementById("massage").value;

        Email.send({
    Host : "smtp.elasticemail.com",
    Username : "paytmking15+portfolio@gmail.com",
    Password : "6504F9F0C4F65BCF3863DA9F00ED9351E0BD",
    To : 'anilthescienceboy@gmail.com',
    From : 'paytmking15+portfolio@gmail.com',
    Subject : "portfolio website Enquiry"+subject1,
    Body : "<b>Name:</b> "+name1+"<br><b>Email:</b> "+Email1+"<br><b>Subject:</b> "+subject1+"<br><br><b>Massage:</b> "+massage1,
}).then(
  message => alert("message sent successfully")
);
    
}