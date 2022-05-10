console.log("test!");
var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://example.com', false ); // false for synchronous request
    xmlHttp.send( null );
