# Robot test

We have installed a robot in our warehouse and now we need to be able to send commands to control it. We need you to implement the primary control mechanism.

For convenience the robot moves along a grid in the roof of the warehouse and we've made sure that all of our warehouses are built so that the dimensions of the grid are 10 by 10. We've also made sure that all our warehouses are aligned along north-south and east-west axes.

All of the commands to the robot consist of a single capital letter and different commands are delineated by whitespace.

#### Requirements

- Create a way to send a series of commands to the robot
- Make sure the robot doesn't try to break free and move outside the boundary of the warehouse

The robot should accept the following commands:

- N move north
- W move west
- E move east
- S move south

## Environment requirement

1. node = 14

## Package Install

Run `npm install` from the root folder to install all the libraries.

## Local development

### Run app in the local

1. Run `npx ts-node src/app.ts` from root folder.

### Run test in the local

1. Run `npm run test` from root folder.
