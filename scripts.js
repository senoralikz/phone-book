let firstName;
let lastName;
let phoneNumber;
let index;
let person = {};
let contacts = [];

const displayContacts = function () {
  if (contacts.length === 0) {
    $("#contact-list").html("");
    $("#contact-length").html(contacts.length + " Contacts");
  } else {
    let contactsHtml = "";

    contacts.forEach(function (currentContact) {
      const currentContactHtml = `
    <tr>
        <td>${currentContact.firstName}</td>
        <td>${currentContact.lastName}</td>
        <td>${currentContact.phoneNumber}</td>
        <td><button type="button" class="edit-contact btn btn-default" value="${contacts.indexOf(
          currentContact
        )}" onclick="editContact(${contacts.indexOf(
        currentContact
      )})" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </button>
        </td>
        <td><button type="button" class="btn btn-default" onclick="deleteContact(${contacts.indexOf(
          currentContact
        )})"><i class="fa fa-trash" aria-hidden="true"></i>
        </button>
        </td>
        </tr>
      </tr>
    `;

      contactsHtml += currentContactHtml;
    });

    $("#contact-list").html(contactsHtml);
    $("#contact-length").html(contacts.length + " Contacts");
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
    $("#firstName").focus();
  }

  displayContacts();
  console.log(contacts);
};

const editContact = function (editValue) {
  index = editValue;
  console.log("you clicked on edit");
  // console.log(index);

  $("#firstName-update").val(contacts[index].firstName);
  $("#lastName-update").val(contacts[index].lastName);
  $("#phoneNumber-update").val(contacts[index].phoneNumber);
};

const submitEdit = function (arr, index) {
  if ($("#phoneNumber-update").val() === "") {
    $(".modal-message").html(`
      <p class="alert alert-warning" role="alert">
      Please enter a phone number!
      </p>`);
    $(".alert").delay(2000).fadeOut("slow");
  } else {
    arr[index].firstName = $("#firstName-update").val();
    arr[index].lastName = $("#lastName-update").val();
    arr[index].phoneNumber = $("#phoneNumber-update").val();

    console.log(index);
    console.log(contacts);

    $("#exampleModal").modal("hide");
    $("#update-form")[0].reset();

    displayContacts();
  }
};

const deleteContact = function (index) {
  console.log("you clicked delete button");
  if (index >= 0) {
    contacts.splice(index, 1);
    displayContacts();
  } else {
    console.log("index could not be found");
  }
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

// for filtering through contacts using search bar
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
$("#update-contact").on("click", submitEdit);
$("#delete-contact").on("click", deleteContact);
$("#sortOptions").on("change", sortingOptions);
