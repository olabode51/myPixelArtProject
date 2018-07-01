// Select color input
// Select size input

let width = $('#inputWidth');
let height =$('#inputHeight');
let color =$('#colorPicker');
// When size is submitted by the user, call makeGrid()



function makeGrid () {
    $("table tr").remove();

     let height = $('#inputHeight').val();    //making the height to receive value input
     let width = $('#inputWidth').val();      // making the height to receive value input
    
    for(let N = 1; N <= height; N++) {
        $('table').append('<tr></tr>');
        for(let M = 1; M <= width; M++) {
            $("tr:last").append('<td></td>');
            $("td").attr("class","cell")
        };
        
    };

}

$('#clearGrid').click(function() {
    $('#pixelCanvas').remove();
})

$('#sizePicker').submit(function (event) {
    event.preventDefault();
    makeGrid();
});



   
$('#pixelCanvas').on('click','.cell',function () {
    let color = $('#colorPicker').val();
    $(this).css('background-color',color);
});


