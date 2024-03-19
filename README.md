# Find Spare Chairs

Welcome to the Find Spare Chairs repository! This JavaScript function helps you find spare chairs in various meeting rooms to accommodate a specific number of attendees. 

## Description

When organizing meetings, it's common to find yourself short on chairs. This function takes a list of meeting rooms along with the number of occupants in each room and calculates how many chairs can be taken from each room in order to meet the required number of chairs.

## How It Works

- The function `findSpareChairs` takes two parameters:
  - `rooms`: An array of arrays, where each sub-array contains the number of occupants and the total number of chairs in a meeting room.
  - `required`: The number of chairs required for the meeting.
- It iterates through each meeting room and calculates the available chairs by subtracting the number of occupants from the total number of chairs.
- It then determines how many chairs can be taken from each room to meet the required number.
- If there aren't enough spare chairs available, it returns `0`. If no chairs are needed, it returns `1`.
- The function returns an array indicating how many chairs are taken from each room.


