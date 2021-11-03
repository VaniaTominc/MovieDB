# Coding Challenge (Front-end)

### Introduction 
As a coding test, I got a challenge designed to explore my React & SCSS front-end skills. I had to create a simple SPA based on the provided mockup and do a few API calls to a public web API.


### The challenge
You have to complete the test and write any necessary code so that the discover page looks like this [mockup] design. All the images/icons you need are already imported and you can find them under the images folder. 

The discover page should enable users to search for movies as keywords are typed into the search bar. Functionality for filtering does not need to be implemented, however the filter categories should still be expandable/collapsable upon clicking. On mobile devices, the navigation bar should slide in from left to right when the user clicks on the hamburger icon, and back when the user clicks on a close icon or outside the SideBar. In addition, you have to add all the responsive stylesheets for the app to run smoothly on mobile devices.

Movie data can be queried via: 
- [theMovieDB]

Packages & Technologies used in the repo:
- `axios`
- `node-sass`
- `react-router-dom`
- `styled-components`
- `react-icons`

### Bugs, Challenges, Wins
+ #### Challenges & Bugs
    - [Challenge] `NavBar.` It was not difficult to build it. I struggled and sadly did not find the solution for when the user clicks outside of the area, the navbar gets closed. I tried many approaches and looked into external packages, but sadly, it did not work the way I wanted.
    - [Challenge] `Getting genres data.` theMovieDB has different ways to access genres data. The easiest one is getting just the genre names (for example, listing filter options). When you access movie data, you get genres back only as an id. I tried to combine both options, but in the end, just decided to use another way. I called on the movie by its id and then automatically got its genres by the string name. 
    - [Bug] `Getting genres data.` My above solution is not optimal when searching for a movie. Sometimes (on the first search), it causes a memory leak in my application. It looks like my React state is trying to update on an unmounted component. I have to read more on a useEffect cleanup function or find a better and effective solution to getting genres data.
    - [Bug] `Filter icon` on smaller devices (more a logic bug than anything else).
+ #### Wins
    - Converting class-based components to arrow function-based components.
    - Using hooks.
    - Building a page that looks quite similar to the mockup.
    - Working with many split components. I also created a custom component because otherwise, the "parent" component would be just too messy with so much code.
    - Working with styled-components. It is maybe the reason why I used more styled-components than proper SCSS. Why? While I am more comfortable with SCSS, I wanted to challenge myself with something I was unfamiliar with before the challenge.

### Future features and key learnings

+ ### Future features
    - Making filtering options workable. For now, only the search function works, but I would love to include also filtering based on 'Genre,' 'Language,' 'Rating.'
    - Create a workable NavBar. It works but not the way the challenge asked me to do it. 
    - Build the rest of the page. 
    - Better error handling. 
+ ### Key learnings
    - Working on a project that is partially already done. It is interesting how other Software Engineers structure their code. You need to adapt if you want to build on that code, and I think I did it pretty well.



[theMovieDB]: <https://www.themoviedb.org/documentation/api>
