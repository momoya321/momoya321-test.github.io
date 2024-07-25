const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/darkfirefox.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
  const myName = prompt("あなたの名前を入力してください。");
  if(!myName){
    setUserName();
  }else{
  localStorage.setItem("name", myName);
  myHeading.textContent = `かっこいいよ、${myName}。`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `かっこいいよ、${storedName}`;
}

myButton.onclick = () =>{
    setUserName();
};
