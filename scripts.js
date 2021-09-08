let firstName;
let lastName;
let phoneNumber;
let person = {};
let contacts = [];

const displayContacts = function () {
  if (contacts.length === 0) {
    $("#no-contacts").html(`<p>No Contacts</p>`);
  } else {
    $("#no-contacts").html("");

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
  }
};

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
    contacts.push(person);
    $("#contact-form")[0].reset();
  }

  displayContacts();
};

const sortFirstName = function () {
  contacts.sort((a, b) =>
    a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0
  );

  displayContacts();
};

const reverseFirstName = function () {
  sortFirstName();

  contacts.reverse();

  displayContacts();
};

const sortLastName = function () {
  contacts.sort((a, b) =>
    a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0
  );

  displayContacts();
};

const reverseLastName = function () {
  sortLastName();

  contacts.reverse();

  displayContacts();
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

$(document).ready(function () {
  $("#searchContacts").on("keyup", function () {
    let value = $(this).val().toLowerCase();
    $("#contact-list tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

displayContacts();
$("#addContact").on("click", addContact);
$("#sortOptions").on("change", sortingOptions);
