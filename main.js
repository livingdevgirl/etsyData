// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);


// 1: Show me how to calculate the average price of all items.

// var myKeys = Object.keys(data)
// console.log(data[i].price)
function question1() {
  var sum = 0;
  var average = 0;
  for (let i = 0; i < data.length; i++) {

    sum += data[i].price;

  }
  average = Math.floor((sum / 25));

  console.log("The average price is" + " " + "$" + average + ".00");
  return ("The average price is" + " " + "$" + average + ".00")
};




// 2: Show me how to get an array of items that
//cost between $14.00 and $18.00 USD
let itemArray = []

function question2() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].price >= 14.00 && data[i].price <= 18.00) {
      itemArray.push(data[i].title);
    }

  }
  console.log(itemArray)
  return itemArray

};




// 3: Which item has a "GBP" currency code? Display it's name and price.
let currCode = ""

function question3() {

  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      currCode = (data[i].title + " " + "$" + data[i].price + ".00")

    }

  }
  console.log(currCode)
};

// 4: Display a list of all items who are made of wood.
function question4() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.includes('wood')) {
      console.log(data[i].title)
    }

  }

};



// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.length > 8) {
      console.log(data[i].title + " " + data[i].materials.length + "               -" + data[i].materials)

    }
  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6() {
  let amount = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      amount += 1;

    }
  }
  console.log(amount + " " + 'were made by their sellers')
};
