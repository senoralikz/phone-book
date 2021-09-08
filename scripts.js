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

// const checkSorted = function (contacts) {
//   let j;

//   for (let i = 0; i < contacts.length; i++) {
//     j = i + 1;
//     if (contacts[j] - contacts[i] < 0) return false;
//   }
//   return true;
// };

const sortFirstName = function () {
  contacts.sort((a, b) =>
    a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0
  );

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

const reverseFirstName = function () {
  sortFirstName();

  contacts.reverse();

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

    $("#contact-list").html(contactsHtml);
  });
};

const sortLastName = function () {
  contacts.sort((a, b) =>
    a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0
  );

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

const reverseLastName = function () {
  sortLastName();

  contacts.reverse();

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

    $("#contact-list").html(contactsHtml);
  });
};

const sortingOptions = function () {
  let selValue = $("#sortOptions").val();

  if (selValue === "1") {
    sortFirstName();
  } else if (selValue === "2") {
    reverseFirstName();
  } else if (selValue === "3") {
    sortLastName();
  } else if (selValue === "4") {
    reverseLastName();
  }
};

$("#addContact").on("click", addContact);
$("#sortOptions").on("change", sortingOptions);
// $("#firstAscending").on("click", sortFirstName);
// $("#lastAscending").on("click", sortLastName);
