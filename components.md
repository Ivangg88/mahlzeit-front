Components

## Register

- Receive: The typed information from the user.
- Show: A form to register de data from the user.
- State: The given information.
- User actions: write on the inputs fields and click on the submit button.
- Action: Save the user information and send to the store and the api(POST Method).

## Login

- Receive: The typed information from the user.
- Show: A form to login the user..
- State: The given information.
- User actions: write on the inputs fields and push the submit botton.
- Action: Save the user information and send to the store and the api(POST Method).

## ItemCard

- Receive: The information of the item
- Show: The information received with 2 links and 1 button .
- State: Nothing.
- User actions: click on the button and links.
- Actions:
  - button max: go to the detail of the item.
  - link favourites: add item to the favourites list.
  - link delete: delete item from the favourites list.

## ItemList

- Receive: A list of cards of items.
- Show: The given list.
- State: Nothing.
- User actions: click on the button and links of the ItemCards.
- Actions:

## Header

- Receive: Nothing
- Show: The header of the page.
- State: Nothing.
- User actions: None
- Actions: None

## Loading

- Receive: Nothing.
- Show: A modal with the information loading.
- State: Nothing.
- User actions: None.
- Actions: None.

# Pages

## LoginPage

## RegisterPage

## HomePage

## FavouritesPage

## CreateItemPage

# Data layer

- Login information for the user(store).
- Given token from the api.(Local storage & store.).
- Given data for the item.(store)
- Status of the pages(store)
