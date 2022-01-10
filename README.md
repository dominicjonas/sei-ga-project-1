# SEI-GA-Project-1 Speed Typing Game

## Live project: https://ga-project-1-speed-typing.netlify.app/


![Screenshot 2021-09-08 at 15 21 35](https://user-images.githubusercontent.com/83312425/132527311-bb9943e3-3fe0-4be1-ad59-1c815e36f0cf.png)


![Screenshot 2021-09-08 at 15 55 19](https://user-images.githubusercontent.com/83312425/132533321-111cf208-d06c-4cd7-a23c-df45425400b7.png)



## Overview

  ### Team: 1
  ### Timespan: 1 day
   

## Technologies used
### Backend
- Firebase9
- Firebase9 authentication 
### Frontend
- React
- HTML5
- CSS / SASS
- Webpack
- GSAP
### Design
- Figma
### Version Control
- Git
- GitHub

## Design, Plan & User-storys

## Design
Figma was used for the initial brainstorming, database design, feature planning and UI concepts. 
![Screenshot 2022-01-10 at 12 19 43](https://user-images.githubusercontent.com/83312425/148765063-e711e95d-9f6e-47da-8144-065a0ef02bad.png)

## Plan
My plan for this quick fire project was to go over the Firebase docs in detail and make notes along the way on how to implement each feature of the app. This also involved extra reading on NoSQL compared to SQL database structure, which is what I have been implementing in full-stack projects up until now. 

## GOTY - User Story
- Sign in using Google authentication.
- Add a goal for this year.
- Goal is stored as a document within the ‘goals’ collection of the Firebase9 server and rendered in a UI list.
- Can delete a goal from the frontend list and database.
- Given a personalised widget in the UI to display:
    -  The user’s profile name attached to their Google account.
    -  A dynamic welcome depending on the local time of the signed in user.
    - A continuous dynamic clock displaying the time remaining to complete their goals.
    - A button to sign out.


### Colour Palette
![Group 25](https://user-images.githubusercontent.com/83312425/148766566-c44451e4-758d-4504-a608-f6aff0eb9a44.png)


## Functionality

### GSAP animations
My previous use of GSAP had only been with vanilla JavaScript. This was the first time integrating it into a larger React project. Robust, high performance animations can be achieved by constructing a `GSAP timeline` within a `useEffect` React hook on the component where you want the animation to trigger.  I used this to trigger a `scale` and `opacity` animation on the GOTY title and subtitle.
![gsapcode](https://user-images.githubusercontent.com/83312425/148769712-aca04e9d-c847-4016-97cc-27db149285d0.png)


### User Auth
The built in methods of Firebase9 make user authentication fast and intuitive to code.  I chose to use the `GoogleAuthProvider()` method to fetch a user’s credentials to then feed the relevant data throughout the app.
I passed down `photoURL` and `username` props to the widget to dynamically display the user’s Google profile name and picture.


## Wins
I learned a lot about Firebase9 and NoSQL database structure in short timeframe. I absolutely love the efficiency and capabilities of Firebase and will certainly be using it to quickly implement the backend structure for future personal projects. 

## Future Features
- Ability to update and edit posted goals.
- Separate goals into categories of `main`, `learning` and `personal`
- Add a variety of sign in methods. To include `GitHub` account verification. 
- Send custom templated email notifications on the progress of completed goals based on the remaining time of the year.  





