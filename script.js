const messages = [
    "Em chắc chứ?",
    "Thật sự chắc chứ???",
    "Em chắc chắn chứ??",
    "(Name), làm ơn mà! 🥺💕...",
    "Chỉ cần nghĩ về nó thôi mà!",
    "Nếu em nói không, anh sẽ buồn lắm đấy...",
    "Anh sẽ rất buồn...",
    "Anh sẽ cực kỳ, cực kỳ, cực kỳ buồn...",
    "Thôi được rồi, anh sẽ không hỏi nữa...",
    "Đùa thôi, đồng ý đi mà! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}