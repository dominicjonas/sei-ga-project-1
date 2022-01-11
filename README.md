# SEI-GA-Project-1 Speed Typing Test

## [Live project](https://ga-project-1-speed-typing.netlify.app/)S


![Screenshot 2021-09-08 at 15 21 35](https://user-images.githubusercontent.com/83312425/132527311-bb9943e3-3fe0-4be1-ad59-1c815e36f0cf.png)


![Screenshot 2021-09-08 at 15 55 19](https://user-images.githubusercontent.com/83312425/132533321-111cf208-d06c-4cd7-a23c-df45425400b7.png)



## Overview - Project Brief
  - Build a game using vanilla JavaScript
  - Utilise DOM manipulation and event handling
  - Use semantic and accessible HTML and CSS
  - Host and deploy 

### Team: 1
### Timespan: 1 week
   

## Technologies used
### Frontend
- HTML
- CSS
- SASS
- JavaScript
- GSAP
- FontAwesome
### Design
- Figma
### Version Control
- Git
- GitHub

## Design, Plan & User-storys

## Design
Figma was used for the initial brainstorming, database design, feature planning and UI concepts. 
![Screenshot 2022-01-10 at 19 34 08](https://user-images.githubusercontent.com/83312425/148827709-fc1c4fec-84c0-496f-b548-953b56bcd248.png)


## Plan
When this project began I was in the process of learning to touch type to improve my coding efficiency and general keyboard speed. While brainstorming in Figma, ideas for a speed typing game began to develop. I felt this would be a great chance to solidify some of the fundamental concepts within the JavaScript language, as well as gain some first hand experience with DOM manipulation. 
The concept of the game went through a few iterations, but eventually landed on having the user type the first passage of 1984 as fast as they can. The programs I was using to learn to touch type gave me a display of my current `WPM` (Words Per Minute) so I wanted to replicate this functionality in my app. 

## User Story
- Intro screen displaying the game's point system.
- Clicked button triggers a GSAP animation moving overlays to reveal the main game screen.
- As the user types, the relevant keys light up.
- WPM, score-streak and current score are dynamically rendered.
- When the user finishes typing the passage from 1984, their WPM and final word score are displayed.


### Colour Palette
![1984clr](https://user-images.githubusercontent.com/83312425/148831060-3d0964bd-19e9-4a76-8d91-bae52b6febbd.png)


## Functionality

### GSAP animations
This was my first experience was the GSAP animation library. I barely scratched the surface with what is possible so I am very keen to implement it into future projects and explore further. Below is the code for staggering the overlay animations which is triggered with a `click event` when the game starts.
![gsapovr](https://user-images.githubusercontent.com/83312425/148831839-11ca5e20-234f-4bef-b05b-0c3b6023cd29.png)


## Wins
- It was a big challenge to manage the different levels of events running throughout the game. I learned a lot on the principles of functional programming and the importance of DRY code.
- This was my first experience with using `SASS` and there were  many iterations on the structure of the styling, but the final result is an interesting and polished UI.  






