let firstName;
let lastName;
let phoneNumber;
let contacts = [];

$("#addContact").on("click", function (event) {
  event.preventDefault();

  firstName = $("#firstName:text").val();
  lastName = $("#lastName:text").val();
  phoneNumber = $("#phoneNumber").val();

  if (phoneNumber === "") {
    console.log("enter number");
  } else {
    $("#contact-list").html(`
    <tr>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${phoneNumber}</td>
    </tr>
  `);
  }

  $("#contact-form")[0].reset();

  console.log(firstName, lastName, phoneNumber);
});
