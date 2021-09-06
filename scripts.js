let firstName;
let lastName;
let phoneNumber;
let person = {};
let contacts = [];

const addContact = function (event) {
  event.preventDefault();

  person = {
    firstName: $("#firstName:text").val(),
    lastName: $("#lastName:text").val(),
    phoneNumber: $("#phoneNumber").val(),
  };

  if (person.phoneNumber === "") {
    $(".message").html(`
    <p class="alert alert-warning" role="alert">
    Please enter a phone number!
    </p>`);
    $(".alert").delay(2000).fadeOut("slow");
  } else {
    // console.log(person);
    contacts.push(person);
    // console.log(contacts);
    $("#contact-form")[0].reset();
  }

  let contactsHtml = "";

  contacts.forEach(function (currentContact) {
    const currentContactHtml = `
    <tr>
        <td>${currentContact.firstName}</td>
        <td>${currentContact.lastName}</td>
        <td>${currentContact.phoneNumber}</td>
      </tr>
    `;

    contactsHtml += currentContactHtml;
  });

  $("#contact-list").html(contactsHtml);
};

const sortFirstName = function () {
  console.log("you clicked on first name table header");

  console.log(contacts);

  contacts.sort((a, b) =>
    a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0
  );

  console.log(contacts);

  let contactsHtml = "";

  contacts.forEach(function (currentContact) {
    const currentContactHtml = `
      <tr>
          <td>${currentContact.firstName}</td>
          <td>${currentContact.lastName}</td>
          <td>${currentContact.phoneNumber}</td>
        </tr>
      `;

    contactsHtml += currentContactHtml;
  });

  $("#contact-list").html(contactsHtml);
};

const sortLastName = function () {
  console.log("you clicked on last name table header");

  console.log(contacts);

  contacts.sort((a, b) =>
    a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0
  );

  console.log(contacts);

  let contactsHtml = "";

  contacts.forEach(function (currentContact) {
    const currentContactHtml = `
      <tr>
          <td>${currentContact.firstName}</td>
          <td>${currentContact.lastName}</td>
          <td>${currentContact.phoneNumber}</td>
        </tr>
      `;

    contactsHtml += currentContactHtml;
  });

  $("#contact-list").html(contactsHtml);
};

$("#addContact").on("click", addContact);
$("#first-name").on("click", sortFirstName);
$("#last-name").on("click", sortLastName);
