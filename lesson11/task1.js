function someText(text, time) {
  setTimeout(() => console.log(`${text}`), time);
}

someText("Hello, I am some text!", 3000);
