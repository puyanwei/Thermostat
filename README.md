# Thermostat

This is a single page app in which you have manual control over the temperature,
as well as the ability to look up the current temperature in another city.

## Tech Stack

* Javascript
* Node JS
* JQuery
* HTML
* CSS
* OpenWeatherMap API
* Jasmine

## Installation

Go to your terminal and `git clone git@github.com:puyanwei/Thermostat.git`. Go
to the project folder and `open index.html`

## Features

* Starts with a default temperature of 20.
* Minimum temperature is 10.
* With Power Saving Mode on, the maximum temperature is 25, else when it is off it is 32.
* The reset button resets the temperature back to 20.
* The background colour changes to blue when the temperature is lower than 18,
  red when it is over 25, and orange when it is in between the two.
* Inputting a city will return the current temperature of that choice via the
  OpenWeatherMap API.

![screen shot 2017-11-29 at 19 17 33](https://user-images.githubusercontent.com/14803518/33398827-3ac8d1a6-d548-11e7-81bb-c71e25b485c2.png)

## Quality control

High quality coding practices was written in mind with this project.

* All tests are passing.
* 95% or above test coverage.
* Javascript consistent linting.
* Commits are regular, small and have good descriptions.
* Good naming conventions, do not repeat (DRY), single responsibility principle,
  and naming reveals intention.
