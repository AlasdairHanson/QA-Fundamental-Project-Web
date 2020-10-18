# Steam Wish list Application

### Resources
---
- Presentation: 
- Trello: https://alasdairh.atlassian.net/secure/RapidBoard.jspa?rapidView=7&projectKey=QA&selectedIssue=QA-5

## Contents
---

* [Brief](#brief)
   * [Requirements](#requirements)
   * [My Approach](#my-approach)
* [Architecture](#architecture)
   * 
* [Project Tracking](#project-tracking)
* [Risk Assessment](#risk-assessment)
* [Testing](#testing)
* [Front-End Design](#front-end-design)
* [Known Issues](#known-issues)
* [Future Improvements](#future-improvements)
* [Authors](#authors)

## Brief
---

I have been tasked with creating an application that utilises Create, Read, Update and Delete functions in order to demonstrate what I have learned over the last few weeks at the Academy.

### Requirements

In addition to the brief, I am also required to include:

- A Jira board with user stories and tasks needed to complete the project.
- A Risk Assessment.
- A relational database used to store data persistently for the project.
- An application created in the OOP language.
- A functioning front-end website and integrated API.
- Unit and Integration testing for the OOP application with a minimum coverage of 80%.
- Code fully integrated into Git.

### My Approach

To achieve the requirements, I have decided to develop a game wishlist application that must allow the user to do the following:

- Add new games to the wish list with the following information:
  * Game title
  * Game price
- View the added games on the web page
- Update a game's title or price
- Delete a game from the wish list

Additionally, I would like the wish list to:

- Display the total cost of all of the existing games in the wish list
- Display the date and time that each game was added

## Architecture
---

The project is designed to utilise various types of software that makes a web site function. Each peice of software plays a part in how the transfer of data is handled between a website where data is created and viewed, and a database where data is stored and passed back. In this section, I will discuss the various tools that I used for each section and their purpose in the pipeline of client-server communication.

### Website

The website is a structure of HTML (Hyper Text Markup Language) objects that describes how information is presented. The website created in the project utilises HTML objects such as input text boxes and buttons to allow a user to enter information and trigger an action when the button is pressed. Other components, such as dividers and forms, allow objects to be grouped together under a single identifier, so that code which targets the divider applies it to every object inside it.

HTML objects can be styled using CSS (Cascading Style Sheet) that applies a wide range of effects to make the web page more visually appealing. Effects include fonts, colours and animation that changes how objects look and behave. CSS can manipulate a structure that each HTML object has called a Box Model. The Box Model describes an object as a box with attributes such as padding, margin and border which can be individually changed in order to change the object's appearance on the web page.

To add functionality to the web page, JavaScript is utilised. When the website is loaded, the browser creates a Document Object Model (DOM) that captures each HTML element and organises them in a tree structure and defining methods that control them. JavaScript utilises DOM to gain access to the properties, methods and events that control each HTML element, such as updating text inside a paragraph object, or listening and acting on a button press. JavaScript connects with the server using Fetch/Then methods that send HTTP CRUD commands to a server URL with the user's data sent in a JSON file. It then acts on the information that it gets sent back and manipulates the DOM to display the information.

The project uses Visual Studio Code to create each part of the front-end: an HTML file for the website structure, a CSS file for the styling of the web page, and a JS script containing the JavaScrpit code. VSC has a feature that allows HTML to be run as a "Live Server" that creates the website in real-time as it is saved, allowing for a more streamlined development process. 

### Server

The server is created using Spring and is responsible for handling requests to and from the web page and accessing the database. It is divided into a controller layer for handling and routing incoming requests to the correct service, and a service layer that contains methods for manipulating the connected database. The server expects a "game title" and "game price" value in the request body and creates a "Game" object with the values. 

The controller layer defines four methods for handling the different CRUD requests from the web API. Above each method, a CRUD mapping label is added to differentiate what each method does and defines a URL that the web API needs to add to use to correctly send the request to the server. CRUD mapping listens for the type of request coming from the web service by reading the method defined in the requests header. Each controller then calls the method name of the corresponding service and passes on information from the JSON in the request body.

The service layer is responsible for receiving information from the controller and mapping them to a record in a database. Spring utilises a CrudRepository framework for defining access methods to the database based on a different CRUD operation with commands such as save, findAll and findById that performs saving data, finding data, and finding data by a primary key respectively. 

### Database

Spring utilises a framework called JpaRepository that extends a repository interface that initially creates the database and then adds the information sent from the service. The repository takes in the game object and a generated ID to serve as a game's primary key for findById methods of the service layer.

## Project Tracking
---

Jira was used to manage the workflow of the project (pictured below). The link to this board can be found here:
https://alasdairh.atlassian.net/secure/RapidBoard.jspa?rapidView=7&projectKey=QA&selectedIssue=QA-5

![Imgur](https://i.imgur.com/7QuWoOs.png)

The Jira board is based on a Kanban process which helps visualise the state of tasks and how far they are along in development. The flow of tasks goes from left to right, from their point of conception in the backlog, to their completion and implementation. The board contains cards showing different information about what needs to be done and come in various forms:

* *Epics*
   A larger body of work that can be broken down into user stories.
* *User Stories*
   An abstract element written from the user's point-of-view about what the finished software should achieve. This keeps the development focused around the user.
* *Tasks*
   Individual elements of a user story describing what needs to be done to meet it's requirements.

## Risk Assessment

The risk assessment can be found here: https://docs.google.com/spreadsheets/d/1dIfPyBMceQFMduswRlftWzbPgvh1_pTHNQ4t0FssEu4/edit#gid=0

![Imgur](https://i.imgur.com/KuVx35b.png)

## Testing 
---

Testing was done on the Spring application to verify the CRUD functionality of the back-end without any interaction form the front-end. These included Unit testing with JUnit and Mockito to test individual modules in isolation, and integration tests using MockMVC to test modules when they are combined with other dependencies. These will inform the developer of which tests passed and which tests failed.

The Integration tests are used to test the controller by utilising MockMVC to mock requests that would otherwise be sent from the front-end to the service. The Unit tests are used to test the service interaction with the database by utilising Mockito to send and compare data to see if it correctly saves in the database.

![Imgur](https://i.imgur.com/OzyYvlJ.png)

The report above shows coverage for the enitre Spring project broken down into its components.

![Imgur](https://i.imgur.com/BjlgX4H.png)

For the Unit Test, we can see that majority of coverage is with the unit test file itself as well as the service file because the unit tests are designed to test how the service handles requests to the database only.

![Imgur](https://i.imgur.com/hfmnjL4.png)

For the Integration Test, we can see apart from the test file itself that the majority of execution happens in both the controller and service. This is because the intergation test mocks a HTTP request that is handled by the controller before being passed to the service in order to see how their code is utilised.

## Front-End Design
---

The front-end of the application contains HTML elements in a structure that allows the user to have full CRUD functionality on the web page. The styling built from CSS makes the web page more appealing to look at and easier to navigate.

The interface contains input elements and a button for the user to enter and send the game's details:

![Imgur](https://i.imgur.com/jsYFhc7.png)

The game is then added to the web page as a card containing the details that the user added, as well as buttons to edit or delete it:

![Imgur](https://i.imgur.com/BF3b3tC.png)

As more games are added, the cards containing them are stacked below each other. We can see the "total" at the top of the first card containing the sum of the prices of each game in the list:

![Imgur](https://i.imgur.com/eDU3A3A.png)

We can see that the game "Battlefield 4" was deleted from the wish list as seen previously because the user pressed the delete button on it's card:

![Imgur](https://i.imgur.com/vpdYN0F.png)

When the user presses the "Update" button, a new card appears containing input and button elements. In this example, the game "Minecraft" is targeted to be changed to "Battlefield 4" along with a new price:

![Imgur](https://i.imgur.com/60UgbHL.png)

Here the update is then executed whent he user presses the "Save Changes" button and the card that used to contain "Minecraft" has now been changed.

![Imgur](https://i.imgur.com/J7WY8DZ.png)

## Known Issues
---

## Future Improvements
---

There are some improvements that I would like to implement:

- 

## Authors
---

Alasdair Hanson

