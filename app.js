document.addEventListener("DOMContentLoaded", function (event) {
    tossButton = document.querySelector('#toss-button');
    tossButton.addEventListener('click', (event) => {
        let loader = document.querySelector('#loader');
        tossButton.disabled = true;
        if (loader.style.display == "none") {
            loader.style.display = "block";
        }
        if (document.querySelector('.toss-result') !== null) {
            document.querySelector('.toss-result').remove();
        }
        setTimeout(function () {
            let outputs = ['black', 'white'];
            let result = outputs[Math.floor(Math.random() * outputs.length)];
            if (document.querySelector('.toss-result') !== null) {
                document.querySelector('.toss-result').remove();
            }
            if (result == "white") {
                var outputImage = 'white-coin.png';
            } else if (result == "black") {
                var outputImage = 'black-coin.png';
            }
            let img = document.createElement('img');
            img.src = outputImage;
            img.height = '500';
            img.width = '500';
            let imgClass = ['toss-result', 'mx-auto', 'd-block', 'rounded']
            img.classList.add(...imgClass);
            swal({
                title: result == 'white' ? "You Won" : "You lose",
                text: result == 'white' ? "You can start to play now" : "Its white turn better luck next time mate",
                icon: result == 'white' ? "success" : "error",
              });
            document.querySelector('#result').append(img);
            loader.style.display = "none";
            tossButton.disabled = false;
        }, 2000)

    })

});