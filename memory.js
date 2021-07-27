let pokemonImg = [
    './im/pokemon/1.png',
    './im/pokemon/2.png',
    './im/pokemon/3.png',
    './im/pokemon/4.png',
    './im/pokemon/5.png',
    './im/pokemon/6.png',
    './im/pokemon/7.png',
    './im/pokemon/8.png',
    './im/pokemon/9.png',
    './im/pokemon/10.png',

    './im/pokemon/1.png',
    './im/pokemon/2.png',
    './im/pokemon/3.png',
    './im/pokemon/4.png',
    './im/pokemon/5.png',
    './im/pokemon/6.png',
    './im/pokemon/7.png',
    './im/pokemon/8.png',
    './im/pokemon/9.png',
    './im/pokemon/10.png'
]
let lotrImg = [
    './im/lotr/1.jpg',
    './im/lotr/2.jpg',
    './im/lotr/3.jpg',
    './im/lotr/4.jpg',
    './im/lotr/5.jpg',
    './im/lotr/6.jpg',
    './im/lotr/7.jpg',
    './im/lotr/8.jpg',
    './im/lotr/9.jpg',
    './im/lotr/10.jpg',

    './im/lotr/1.jpg',
    './im/lotr/2.jpg',
    './im/lotr/3.jpg',
    './im/lotr/4.jpg',
    './im/lotr/5.jpg',
    './im/lotr/6.jpg',
    './im/lotr/7.jpg',
    './im/lotr/8.jpg',
    './im/lotr/9.jpg',
    './im/lotr/10.jpg'
]
let images = [],
    themeName = '',
    count = 20, //кол-во картинок на 1 меньше
    theme = document.querySelectorAll('.theme'),
    themesWindow = document.querySelector('.themes'),
    box = document.querySelectorAll('.box'),
    h2 = document.querySelector('h2'),
    html = document.querySelector('html'),
    img = document.querySelectorAll('.box img'),
    finale = document.querySelector('.final'),
    finalScore = document.querySelector('.score'),
    click = -1,
    tempElement1 = "",
    tempElement2 = "",
    time = 0,
    timeElement = document.querySelector('#time'),
    score = 0,
    scoreElement = document.querySelector('#score'),
    win = 0,
    timer =0;

// console.log(themesWindow)

//реализовала выбор темы для картинок
for (let j=0; j<theme.length; j++) {
    theme[j].addEventListener("click", function klik () {
        themeName = this.id;
        switch (themeName) {
            case "Pokemon":
                for (let i = 0; i < 20; i++) {
                    images.push(pokemonImg[i]);
                    h2.innerHTML = 'POKEMON'
                    h2.style.color = 'gold'
                    html.style.background = 'linear-gradient(45deg, #F6AE2D, #758E4F)'

                }
                break;
            case "lordOfTheRings":
                for (let i = 0; i < 20; i++) {
                    images.push(lotrImg[i]);
                    h2.innerHTML = 'Lord of the Rings'
                    h2.style.color = '#473335'
                    html.style.background = 'linear-gradient(45deg, #B47978, #5C80BC)'
                }
                break;
        }
        // рандомно заполняю дивы картинками
        themesWindow.style.display="none"
        while (count--) {
            let k = Math.floor(Math.random() * (count - 0 + 1)) + 0;
            box[count].innerHTML = `<img src = "${images[k]}" class = 'hidden'>`
            images.splice(k,1)

        }
    })
}

//обработка щелчка
for(let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function klik () {
           this.firstChild.classList.remove('hidden')

        //первый клик
        if (click < 1) {
            tempElement1 = this
        //таймер
            if (click === -1) {
                document.querySelector('#score').innerHTML = `Score: ${score}`

              timer = setInterval(function () {
                 time++
                  timeElement.innerHTML =`Time: ${time} sec`
              }, 1000)
            }
            click = 1
        }
            // второй клик
                if (this != tempElement1 && click == 1) {
                tempElement2 = this
                click = 0
                //непохожие картинки
                if (tempElement2.firstChild.src != tempElement1.firstChild.src) {
                    setTimeout( () => {
                        tempElement1.firstChild.classList.add('hidden')
                        tempElement2.firstChild.classList.add('hidden')
                    }, 400)
                    if (score > 0) {
                        score -= 1
                    }
                scoreElement.innerHTML = `Score: ${score}`
                }
            // одинаковые картинки
            else {
                score += 3
                    win += 2
                    scoreElement.innerHTML = `Score: ${score}`
                box[i].removeEventListener('click', klik)
                    tempElement1.style.border = '#fff solid 2px'
                    tempElement2.style.border = '#fff solid 2px'

                //    конец игры
                    console.log(win)
                    if (win === 20) {
                       clearInterval(timer)
                        finale.style.display = 'flex'
                            finalScore.innerHTML += ` ${score}`
                    }

                }

            }
    })


}


