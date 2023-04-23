/**  
 *  @project Expand Cards
 *  @version 1.0.0
 *  @description A javascript mini library for creating simple expand cards width smooth animation.
 *  @author Kirill Kobykhnov (daifoll)
**/

import { expanderConfig } from "./expanderConfig.js";

// Константы
const cardsWrapper = document.querySelector('.cards__wrapper')
const cardBodyArr = document.querySelectorAll('.card-body')

// Выставление настроек из конфига
cardsWrapper.style.width = expanderConfig.width
cardsWrapper.style.height = expanderConfig.height
cardBodyArr.forEach(cardBody => cardBody.style.transition = expanderConfig.animationDuration)

// Функции
const expandCard = (event) => {
        const currentTarget = event.target;
        const currentTargetBody = event.target.parentNode;
    
        if(currentTarget.classList.contains('card-body__img')) {  
            currentTargetBody.classList.toggle('active')
    
            for(let i = 0; i < cardBodyArr.length; i++) {
                if((cardBodyArr[i] !== currentTargetBody )){
                    cardBodyArr[i].classList.remove('active')
                }
            }
    
        }
}

// События
cardsWrapper.addEventListener('click', expandCard)