'use strict';
const inputMessage = document.querySelector("textarea");
const buttonEncrypter = document.querySelector(".btn-encrypter");
const buttonDesencrypter = document.querySelector(".btn-desencrypter");
const outputContent = document.querySelector(".content");
let outputText = "";

buttonEncrypter.addEventListener("click", () => {
    outputText = encrypter(inputMessage.value);
    deleteChildrenElements(outputContent);
    addMessageToOutputSection(outputContent, outputText);
});

function encrypter(message) {
  let word;
  let encryptedMessage = "";

  for (let i = 0; i < message.length; i++) {
    word = message[i];
    switch (word) {
      case "a":
        encryptedMessage += "ai";
        break;
      case "e":
        encryptedMessage += "enter";
        break;
      case "i":
        encryptedMessage += "imes";
        break;
      case "o":
        encryptedMessage += "ober";
        break;
      case "u":
        encryptedMessage += "ufat";
        break;
      default:
        encryptedMessage += word;
        break;
    }
  }

  return encryptedMessage;
}

function deleteChildrenElements(elementHTML) {
    elementHTML.innerHTML = "";
}

function addMessageToOutputSection(elementHTML, message) {
    const p = document.createElement('p');
    const text = document.createTextNode(message);
    p.appendChild(text);
    elementHTML.appendChild(p);
}
