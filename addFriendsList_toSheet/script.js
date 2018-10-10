
// var $form = $('form#text-form'),
// url = 'https://script.google.com/macros/s/AKfycbwQfj4WiXlpfjZgmf6zWP9_5s5Vizsi2K3cGboC_I6TL8ie-R0/exec'

// $('#postform').on('click', function(e) {
// e.preventDefault();
// var jqxhr = $.ajax({
// url: url,
// method: "GET",
// dataType: "json",
// data: ($form).serializeObject()
// }).success(
//     // do something
// );
// })


//---------------------------
// pure JS
const url = 'https://script.google.com/macros/s/AKfycbw371hqY493IOUJRVBXklrb9ulbDsys_HoDIyeCJva6gJVx1IQ/exec';
let form = document.querySelector('#text-form');
// let data = new FormData(form);
// let req = new XMLHttpRequest()
form.addEventListener('submit', function(event)
{
    event.preventDefault();
    var formData = new FormData(form),
        data = {};

    for (var entry of formData.entries())
    {
        data[entry[0]] = entry[1];
    }
    data = JSON.stringify(data)
    console.log(data);

    $.ajax({
        url: url,
        type: "POST",
        data: data,
        dataType: "json",
        success: function (result) {
            switch (result) {
                case true:
                    processResponse(result);
                    break;
                default:
                    return
                    //resultDiv.html(result);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
        }
    });
    

});


