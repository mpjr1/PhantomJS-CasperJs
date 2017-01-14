var casper = require("casper").create();

casper.start("http://en.wikipedia.org", function(){
    this.echo(this.getTitle());
});

casper.then(function(){
    this.echo("Now we are using the 'then' method print this text");
});

casper.then(function(){
    this.echo(this.getCurrentUrl());
});

casper.run(function(){
    this.echo("Done").exit();
});