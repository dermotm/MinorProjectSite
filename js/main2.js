//Mad lib library to show fields after the condition is met in another field.


$(function () {

  $(document).on('change', ".formInput", function() {
    var formID = $(this).attr('id');
console.log(formID);
  toggleFields('#' + formID);

/*  $('#' + formID).change(function() { toggleFields(); });*/

});

});

//this toggles the visibility of our parent permission fields depending on the current selected value of the underAge field
function toggleFields()
{
  if ($("#firstName").val() < 100)
    $("#formField2").show();
  if ($("#middleName").val() > 0)
    $("#formField3").show();
  else
    return;

};
