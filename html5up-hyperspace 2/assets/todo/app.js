// gets us the reference to the form
const addForm = document.querySelector(".add");
//get reference to list/ul
const list = document.querySelector(".todos");
//get reference to input in form
const search = document.querySelector(".search input");

// generate HTML template and adds to the browser/add it to the list.
const generateTemplate = (todo) => {
  const html = `
    <li
    class="list-group-item d-flex justify-content-between align-items-center"
    >
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

  list.innerHTML += html;
};

// listening for submit event, getting the value a user types in and trimming it.
addForm.addEventListener("submit", (e) => {
  //stops the page from reloading
  e.preventDefault();
  //gets value keyed into add a new todo form without whitespaces
  const todo = addForm.add.value.trim();
  //   console.log(todo);

  // check that a user has actually typed a value in and has some kind of length
  //   if so call generate template function if not dont call it
  if (todo.length) {
    generateTemplate(todo);
    //clears form afer hit enter
    addForm.reset();
  }
});

//delete todos
//attach an event listener to the list- when we click on the list, we check if the target element that
// we click was in fact the delete element-ie-trash can- if it was, then we delete the parent of that trash can,
// which is the Li tag itself-if it wasn't this, this returns false and we do nothing- don't delete anything.

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filteredTodos = (term) => {
  //   console.log(term);
  //converts todos to array so can use array methods to filter for matches--filters out those dont match
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

//listen for keyup event-fires function to get the term that a user types in at that moment in time
//every time a user types a letter, callback function fires-what a user types in get that every time they type a new key
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filteredTodos(term);
});

// An easier/more efficient way would be to use event delegation
// we could attach an event listener to the whole Ul itself, not the individual list items.
// whenever anything is clicked inside that Ul, the callback function is going to fire.
// inside that function we can then detect if the target element was in fact a trash can-the element which was actually clicked.
// If it was the trash can, we can then go about deleting the Li tag for that to do.
// If it wasn't the trash can, then we don't need to do anything.

// So this way using event delegation is much better for two reasons.
// First, we're only attaching one event listener to one containing element, the Ul.
// So it's less work for JavaScript to do and more efficient in terms of performance.
// And second, whenever we add a new Todo using this form down here, we don't need to worry about adding
// new listeners for that to do because the to do will be inside the Ul, which is what the listener will
// be attached to.

// filter these to dos so that only the to dos which contain that still show-listen to a Keyup event in this input field- whenever a user types something,
//looking at this term and then trying to match it against whatever the text content of these todos is.

// if we do get a match, we don't want to do anything because we still want to show that on the screen-if don't get a match, then hide that todo and
//by applying a class to the to dos that don't match.

//function filter to do's- takes in term which a user types in-calling this function every time a user presses a key- filter through the to do's and show
//the ones that match-apply classes to ones we don't want to show- ones don't have a match with this because they're the ones we want to hide.

// So this filter method is going to go through of the to do's in this list of li's and it's going to fire this callback function for each one.

// Now remember, the filter method returns us a new array, and that new array is going to be whatever items that we keep in it. Now we keep an item in the array by returning. True.
//And we filter an item out by returning false-before we return, anything, we actually need to take in a parameter here which refers to the individual item in the array as we iterate it.

// So I'll call this A todo and that's going to mean each of the tags basically as we take them in. And for each one I want to return todo.text content and this text content is
//going to look at the actual text inside the span tag.

// Now this is the only text in there, so it's going to try and match it against that. So what we're ultimately going to do is compare the term against the text content
//Then I'm going to use a method called includes- this searchs a string to seees if it includes a certain term and we have that term which we want to check-only want items to be kept
//in the array if they don't include the term- negate what's returned here- reverse it by putting the exclamation mark in front of it.
// So now this new array that we get back from the filter method is going to include only to do's, which don't include the term, because we've placed that there.

// We want an array of to do's which don't contain the term because then what we can do is we can cycle through this array using a for each and apply a class to each one of those in that array.
// And that class in a CSS sheet is going to hide those to do's.
// So this is returning the array that we need and now we can cycle through that array using for each- we need a callback function and this is where inside here we're going to apply
// a class to each one-still take the todo and then we take that to do and we can say class list, then dot add and the class we're going to add is filtered.

// So now we're getting all of the todo's inside the array that don't include that term. Then for each one of them, we're applying a filter class to it.
//So we need a way to do the opposite of what we've just done to remove classes when we get a match- still getting an array from list.children and we're still going to filter through each one.

// This time I want to get a new filtered array which contains all of the elements that do match because when they do match, I want to remove that filtered class.

// And now we get a filtered array of elements or to dos which do contain that term- use for each to cycle through them. And for each one of those we're going to remove the filtered class because we no longer want to hide
// those-we get a match, now we're taking that class back off.
//convert everything to lowercase-so that when we're comparing them, we're comparing lowercase with lowercase.
