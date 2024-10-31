if (!localStorage.getItem("translations")) {
    const initialTranslations = {
      "hello": "привіт",
      "world": "світ",
      "love": "любов",
      "friend": "друг"
    };
    localStorage.setItem("translations", JSON.stringify(initialTranslations));
  }

  function searchTranslation() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const translations = JSON.parse(localStorage.getItem("translations"));
    const resultDiv = document.getElementById("result");
  
    if (translations[searchInput]) {
      resultDiv.textContent = `${searchInput} - ${translations[searchInput]}`;
    } else {
      resultDiv.textContent = `Translation not found. Try adding it below!`;
    }
  }
  
  function addTranslation() {
    const englishWord = document.getElementById("englishWord").value.toLowerCase();
    const ukrainianWord = document.getElementById("ukrainianWord").value;
    const resultDiv = document.getElementById("result");
  
    if (englishWord && ukrainianWord) {
      const translations = JSON.parse(localStorage.getItem("translations"));
  
      if (translations[englishWord]) {
        resultDiv.textContent = `The word "${englishWord}" already exists.`;
      } else {
        translations[englishWord] = ukrainianWord;
        localStorage.setItem("translations", JSON.stringify(translations));
        resultDiv.textContent = `Translation added: ${englishWord} - ${ukrainianWord}`;
      }
  
      document.getElementById("englishWord").value = "";
      document.getElementById("ukrainianWord").value = "";
    } else {
      resultDiv.textContent = `Please enter both English and Ukrainian words.`;
    }
  }
  