// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    
    
  }
  const newMail = new Mail(process.argv[2],process.argv[3])
  /*prompt("ingrese su asunto: " + newMail.subject);
  prompt("ingrese su mensaje: " + newMail.message);
  prompt("ingrese su mensajito: " + newMail.msg);
  */ //aún no furula esta parte
  // Type your code above this line!
  console.log(process.argv);
   console.log(newMail.subject + ": " + newMail.message);