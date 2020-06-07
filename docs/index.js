function convert() {
  let data = $('#editor').val();
  $('#viewer').contents().find('html').html(data);
}


function downloadFile() {
  //scripts and styles should be remote like images
  let data = $('#editor').val();
  console.log(data);
  $.ajax({
    url: "https://online-pdf-generator.herokuapp.com/file",
    method: "POST",
    data: {
      html: data
    },
    responseType: 'arraybuffer',
  }).done((base64EncodedFile) => {
    console.log('downloaded')
    console.log(base64EncodedFile);

    // convert ArrayBuffer to Blob
    var link = document.createElement('a');
    link.download = 'file.pdf';
    link.href = 'data:application/pdf;base64,' + base64EncodedFile;
    document.body.appendChild(link);
    link.click();
  });
}