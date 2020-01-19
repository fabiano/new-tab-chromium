const localStorage = window.localStorage;
const [textarea] = document.getElementsByTagName("textarea");

textarea.addEventListener("input", () => {
  const content = textarea.value;

  localStorage.setItem("content", content);
  chrome.runtime.sendMessage({ content });
});

window.onload = () => {
  textarea.value = localStorage.getItem("content")
};

chrome.runtime.onMessage.addListener(request => {
  textarea.value = request.content;
});
