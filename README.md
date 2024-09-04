# Cash Register

A simple cash register web application that calculates the change due to a customer based on the cash provided and the price of an item. The application also handles different scenarios such as exact change, insufficient funds, and when the cash drawer cannot provide the exact change.

## Features

- Input the cash provided by the customer.
- Calculate the change due based on a fixed item price.
- Display the amount of change due or an error message if not enough money is provided.
- Handle various scenarios including exact change, insufficient funds, and open/closed cash drawer status.

## Technologies Used

- HTML
- CSS
- JavaScript

## How to Use

1. Open the `index.html` file in your web browser.
2. Enter the cash provided by the customer in the input field.
3. Click the "Purchase" button to see the change due or error message displayed below.

## Code Overview

### HTML (`index.html`)

The HTML file sets up the structure of the web page with an input field for cash, a button to trigger the calculation, and a paragraph to display the result.

### JavaScript (`script.js`)

The JavaScript file contains the logic to:
- Calculate the total cash in the drawer.
- Determine if the customer has enough money.
- Compute and display the change due or an appropriate status message.

### CSS (`styles.css`)

The CSS file styles the application, including:
- Centering the content on the page.
- Styling the input field, button, and text.

## Example

Given the fixed item price of `$19.50`:
- If the customer provides `$20.00`, the application will calculate and display the change due.
- If the customer provides `$19.50`, it will display a message indicating no change is due.
- If the cash drawer cannot provide the exact change, it will show an "INSUFFICIENT_FUNDS" status.
