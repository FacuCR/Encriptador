"use strict";
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

buttonDesencrypter.addEventListener("click", () => {
  outputText = desencrypter(inputMessage.value);
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

function desencrypter(message) {
  let desencryptedMessage = message;

  desencryptedMessage = desencryptAOfTheMessage(desencryptedMessage);
  desencryptedMessage = desencryptEOfTheMessage(desencryptedMessage);
  desencryptedMessage = desencryptIOfTheMessage(desencryptedMessage);
  desencryptedMessage = desencryptOOfTheMessage(desencryptedMessage);
  desencryptedMessage = desencryptUOfTheMessage(desencryptedMessage);

  return desencryptedMessage;
}

function desencryptAOfTheMessage(message) {
  let words;
  let desencryptedOnlyAMessage = "";

  for (let i = 0; i < message.length; i++) {
    words = message[i] + message[i + 1];
    if (words === "ai") {
      desencryptedOnlyAMessage += "a";
      i++;
    } else {
      desencryptedOnlyAMessage += message[i];
    }
  }

  return desencryptedOnlyAMessage;
}

function desencryptEOfTheMessage(message) {
  let words;
  let desencryptedOnlyEMessage = "";

  for (let i = 0; i < message.length; i++) {
    words =
      message[i] +
      message[i + 1] +
      message[i + 2] +
      message[i + 3] +
      message[i + 4];
    if (words === "enter") {
      desencryptedOnlyEMessage += "e";
      i += 4;
    } else {
      desencryptedOnlyEMessage += message[i];
    }
  }

  return desencryptedOnlyEMessage;
}

function desencryptIOfTheMessage(message) {
  let words;
  let desencryptedOnlyIMessage = "";

  for (let i = 0; i < message.length; i++) {
    words = message[i] + message[i + 1] + message[i + 2] + message[i + 3];
    if (words === "imes") {
      desencryptedOnlyIMessage += "i";
      i += 3;
    } else {
      desencryptedOnlyIMessage += message[i];
    }
  }

  return desencryptedOnlyIMessage;
}

function desencryptOOfTheMessage(message) {
  let words;
  let desencryptedOnlyOMessage = "";

  for (let i = 0; i < message.length; i++) {
    words = message[i] + message[i + 1] + message[i + 2] + message[i + 3];
    if (words === "ober") {
      desencryptedOnlyOMessage += "o";
      i += 3;
    } else {
      desencryptedOnlyOMessage += message[i];
    }
  }

  return desencryptedOnlyOMessage;
}

function desencryptUOfTheMessage(message) {
  let words;
  let desencryptedOnlyUMessage = "";

  for (let i = 0; i < message.length; i++) {
    words = message[i] + message[i + 1] + message[i + 2] + message[i + 3];
    if (words === "ufat") {
      desencryptedOnlyUMessage += "u";
      i += 3;
    } else {
      desencryptedOnlyUMessage += message[i];
    }
  }

  return desencryptedOnlyUMessage;
}

function deleteChildrenElements(elementHTML) {
  elementHTML.innerHTML = "";
}

function addMessageToOutputSection(elementHTML, message) {
  const p = document.createElement("p");
  const text = document.createTextNode(message);
  p.appendChild(text);
  elementHTML.appendChild(p);
}
