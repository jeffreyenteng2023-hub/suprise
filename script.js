function openMessage() {

    const content = document.getElementById("content");
  
    content.scrollIntoView({
      behavior: "smooth"
    });
  
  }
  
  
  function showSurprise() {
  
    const secret = document.getElementById("secret");
  
    secret.style.display = "block";
  
    // Create floating hearts
  
    for (let i = 0; i < 15; i++) {
  
      const heart = document.createElement("div");
  
      heart.innerHTML = "❤️";
  
      heart.style.position = "fixed";
  
      heart.style.left =
        Math.random() * 100 + "vw";
  
      heart.style.bottom = "-20px";
  
      heart.style.fontSize =
        (15 + Math.random() * 25) + "px";
  
      heart.style.zIndex = "1000";
  
      heart.style.transition =
        "transform 4s ease, opacity 4s ease";
  
      document.body.appendChild(heart);
  
      setTimeout(() => {
  
        heart.style.transform =
          `translateY(-${window.innerHeight + 100}px)`;
  
        heart.style.opacity = "0";
  
      }, 100);
  
      setTimeout(() => {
  
        heart.remove();
  
      }, 4200);
  
    }
  
  }