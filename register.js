document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const message = document.getElementById("registerMessage");

  if (!email || !password || !confirmPassword) {
    message.textContent = "Lütfen tüm alanları doldurun.";
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = "Şifreler uyuşmuyor.";
    return;
  }

  const userKey = "user_" + email;
  if (localStorage.getItem(userKey)) {
    message.textContent = "Bu e-posta zaten kayıtlı.";
    return;
  }

  const newUser = { email, password };
  localStorage.setItem(userKey, JSON.stringify(newUser));
  message.style.color = "green";
  message.textContent = "Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz...";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
});
