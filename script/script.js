const message = `Hallow, Happy Birthday! Selamat menginjak umur 18 tahun. Semoga panjang umur dan sehat selalu. Semoga di umur 18 tahun ini, ada banyak hal baik yang datang dalam hidup kamu serta banyak mimpi indah yang terwujud. Bahagia selalu di manapun dan kapanpun itu, ya. Semoga aku selalu bisa merayakan ulang tahun kamu di tahun tahun berikutnya, selamanya. Sekali lagi, happy birthday. I love you more than you know <3.`;

document.getElementById("wishes").style.display = "none";
document.getElementById("mainweb").style.display = "none";
document.getElementById("clossing").style.display = "none";
function showLetter() {
  document.getElementById("bgm").play();
  document.getElementById("welcome").style.display = "none";
  document.querySelector(".btn").style.display = "none";
  setTimeout(() => {
    const wishes = document.getElementById("wishes");
    const theMessage = document.getElementById("theMessage");
    wishes.style.display = "block";
    document.getElementById("wishes").style.opacity= 1;
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        theMessage.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
function next() {
  document.getElementById("mainweb").style.display = "block";
  document.getElementById("openning").style.display = "none";
  document.getElementById("clossing").style.display = "none";
  document.getElementById("vid").play();
  
}
function next2() {
  document.getElementById("clossing").style.display = "block";
  document.getElementById("openning").style.display = "none";
  document.getElementById("mainweb").style.display = "none";
}
