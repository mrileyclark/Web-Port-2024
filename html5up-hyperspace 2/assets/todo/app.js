// gets us the reference to the form
const addForm = document.querySelector(".add");
//get reference to list/ul
const list = document.querySelector(".todos");

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

// The last part I want to do is this search to do so.

// If I refresh, if I currently search for something, then this is not going to work.

// I want to be able to filter out these things based on what I type and we'll take a look at that in.
