// gets us the reference to the form
const addForm = document.querySelector(".add");
//get reference to list
const list = document.querySelector(".todos");

// generate HTML template and add that to the browser/add it to the list.
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

// listening for the submit event
addForm.addEventListener("submit", (e) => {
  //stops the page from reloading
  e.preventDefault();
  //gets value keyed into add a new todo form without whitespaces
  const todo = addForm.add.value.trim();
  //   console.log(todo);

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// That is what we ultimately want to add to the Dom, to the page.

// We want to add it as a list item.

// Now the reason I'm creating a separate function and not writing it directly in here is because it makes

// our code more reusable.

// For example, if you were to extend this app in the future so that there were other ways to add to do's,

// when you want to do that, you could just invoke this function.

// Okay, so it's reusable.

// You don't have to work this way, but I just want to show you a few ways we can work.

// So anyway, let's create this function.

// I'm going to say const and we'll call this function generate template because it's going to generate

// a template for the to do an li tag and then it's going to inject that into the Dom.

// So we'll set that equal to a function.

// And inside this function we want to do something.

// Now what we're ultimately going to be doing is passing in this to do in fact, we'll call the function

// here.

// We'll say we want to generate the template and we want to pass in the to do right here that a user has

// typed in.

// So we're going to pass in that text.

// We're going to receive it here.

// And since there's just one parameter, we can now delete those parentheses if we want to.

// And inside here, what we need to do is generate a template, an HTML template and output this inside

// it.

// So then to create this template, I'm going to use a template string.

// Now, we could create elements using JavaScript methods like create element.

// But I think when you have to inject some kind of complex template, a few lines of code, it's much

// easier to actually write a template string.

// So I'll do that by saying const HTML is equal to a template string.

// Now inside here, what do we want the template to be?

// Well, it's going to be one of these things, one of these li tags right here.

// So all we really need to do is copy this dude and paste it inside here.

// I'm just going to fix this up a little bit and scoot those in like that.

// And then all we really need to do is replace this thing with the to do right here.

// So we can do that inside a template string.

// We can output the variable inside these curly braces like so.

// And we want that to do so that there is our template.

// And now we want to take this and inject it into the Ul inside this thing right here.

// So first of all, we need a reference to that Ul So we'll store that in a constant called list and set

// it equal to document dot query selector.

// And then we want the dot to dos.

// That was the class of the well right here.

// It has a class of to dos.

// So let me now come down here and say we can get that list and we can say dot inner HTML is now plus

// equals.

// We don't use equals because that completely overwrites the current HTML.

// We don't want to do that.

// We just want to add a new bit of HTML.

// We want to append to it.

// So we use plus equals and we take the HTML.

// Oops, not uppercase this thing right here that we just created.

// So it takes this template string and it adds it to the HTML of the list.

// So we have this list and it has some inner HTML, which is all this.

// All we're doing is adding to that at the bottom with a new tag and the stuff in between.

// So if we now save this, what we're doing is listening for the submit event, getting the value a user

// types in and trimming it.

// Then we're calling this generate template function.

// And inside we're creating this template with the Li tag and the span and then this trash icon inside

// the span.

// We'll outputting that to do which a user types in.

// And then what we're doing is adding that HTML template to the list in the HTML.

// So if we save this now and preview, then we can see by Milk Press enter and it appears right here.

// So that's awesome.

// Now this is great, but there's two things I still want to do.

// First of all, if I don't add anything and I press enter, that's still adds something to the list.

// Now, I don't want that to happen.

// I want to check that a user has actually typed a value in and the to do has some kind of length, even

// if it's just one.

// So the first thing we'll do is a check down here.

// So I'm going to say if at this point and then get the to do, which is what the user has typed in and

// I want to check if that has length so I can say if To-Do dot length.

// Now, if this is a positive integer, it's going to evaluate to true.

// So if the length is one, two, three, four, then that's going to be fine.

// It's going to evaluate to true.

// And then inside we can call this function.

// That's if it does have length.

// Now remember, if dot length returns zero, if a user has typed nothing in here and we press enter the

// length.

// That string is zero.

// Zero is a falsy value.

// So we get false here and we won't call the generate template function.

// So let's try this.

// Now.

// If we try to add something like this, which does have length, it works.

// If we try to add something that doesn't have length, then it doesn't work.

// We're not adding that anymore because we're checking that it has length first before we try to add it.

// If I just do spaces, it still won't work because we're trimming it, first of all.

// So it gets rid of all those spaces and then it has zero length.

// So that's the first problem sorted.

// The second problem is this If I type something in and press enter, then this stays here.

// Now I'd like it to clear the form.

// There is a very simple way we can do that underneath the generate template function.

// What we're going to do is just get the add form.

// Remember, that's this thing that we get a reference to and this thing we add the event listener to.

// We get that form and we use a method on it called reset.

// So we can use this method on forms that we query on the Dom and what that does is reset all the input

// fields inside that form.

// So if I save it now and try this, buy some milk, press enter.

// And now it works.

// And still we can't add empty to dos.

// So there we go, my friends.

// That's the first step done.

// We have successfully now hooked up this part of the application so we can add new to Dos.

// The next thing I'd like to do is be able to delete the dos when we click on these icons and we'll do

// that in the next lecture.
