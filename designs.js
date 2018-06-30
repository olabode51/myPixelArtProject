// Select color input
// Select size input


// When size is submitted by the user, call makeGrid()
function makeGrid () {
    $("table tr").remove();

     let height = $('#inputHeight').val();    //making the height to receive value input
     let width = $('#inputWidth').val();      // making the height to receive value input
    
    for(let x = 1; x <= height; x++) {
        $('table').append('<tr></tr>');
        for(let y = 1; y <= width; y++) {
            $("tr:last").append('<td></td>');
            $("td").attr("class","cell")
        };
        
    };

}

$('#sizePicker').submit(function (event) {
    event.preventDefault();
    makeGrid();
});
   
$('#pixelCanvas').on('click','.cell',function () {
    let color = $('#colorPicker').val();
    $(this).css('background-color',color);

    
});



