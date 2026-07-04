const bookingForm = document.querySelector("#bookingForm");
const formMessage = document.querySelector("#formMessage");

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(bookingForm);
  const date = formData.get("date");
  const time = formData.get("time");
  const name = formData.get("name");

  formMessage.textContent = `${name}，已收到你 ${date} ${time} 的预约申请，我们会尽快电话确认。`;
  bookingForm.reset();
});
