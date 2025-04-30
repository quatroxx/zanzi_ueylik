document.getElementById("authForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("authMessage");

  if (!email || !password) {
    message.textContent = "Lütfen e-posta ve şifre giriniz.";
    return;
  }

  const key = "user_" + email;
  const stored = localStorage.getItem(key);

  if (stored) {
    const user = JSON.parse(stored);
    if (user.password === password) {
      localStorage.setItem("currentUser", email);
      message.style.color = "green";
      message.textContent = "Giriş başarılı. Yönlendiriliyorsunuz...";
      setTimeout(() => window.location.href = "index.html", 1000);
    } else {
      message.textContent = "Şifre yanlış.";
    }
  } else {
    const newUser = { email, password };
    localStorage.setItem(key, JSON.stringify(newUser));
    localStorage.setItem("currentUser", email);
    message.style.color = "green";
    message.textContent = "Kayıt başarılı. Giriş yapılıyor...";
    setTimeout(() => window.location.href = "index.html", 1000);
  }
});
