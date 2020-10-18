# Steam Wish list Application

### Resources
---
- Presentation: 
- Trello: https://alasdairh.atlassian.net/secure/RapidBoard.jspa?rapidView=7&projectKey=QA&selectedIssue=QA-5

### Contents
---

### Brief
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

### Architecture
---




### Project Tracking
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

### Risk Assessment

The risk assessment can be found here:


### Testing 
---

Testing was done on the Spring application to verify the CRUD functionality of the back-end without any interaction form the front-end. These included Unit testing with JUnit and Mockito to test individual modules in isolation, and integration tests using MockMVC to test modules when they are combined with other dependencies. These will inform the developer of which tests passed and which tests failed.

The Integration tests are used to test the controller by utilising MockMVC to mock requests that would otherwise be sent from the front-end to the service. The Unit tests are used to test the service interaction with the database by utilising Mockito to send and compare data to see if it correctly saves in the database.

Below is the coverage report for the enitre Spring project broken down into its components:

!(https://github.com/AlasdairHanson/QA-Fundamental-Project-Web/blob/main/Test%20Coverage.png)

### Front-End Design

The front-end of the application contains HTML elements and structure that allows the user to have full CRUD functionality in their wish list. The styling built from CSS makes the web page more appealing to look at and easier to navigate.

