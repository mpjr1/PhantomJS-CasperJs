var casper = require('casper').create();

casper.start('http://reddit.com/', function() {
    this.echo(this.getTitle());
});

casper.thenOpen('http://phantomjs.org', function() {
    this.echo(this.getTitle());
});

// casper.listen(process.env.PORT, process.env.IP, function(){
//     console.log("Casper.js server is running...");
// });
casper.run();