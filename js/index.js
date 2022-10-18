var elInput = document.querySelector(".js-input");
var elText = document.querySelector(".js-text");


elInput.addEventListener('keyup', function (evt) {
   if (evt.keyCode === 13) {
      var lowercase = evt.target.value.toLowerCase();
      var result = ""
      for (let i = 0; i < lowercase.length; i++) {
         if (i === 0) {
            result += lowercase[i].toUpperCase();
         } else {
            result += lowercase[i];
         }

      }
      elText.textContent = result;


   }

})