import {Container} from 'aurelia-dependency-injection';
import {
  ViewCompiler,
  ViewResources,
  ResourceRegistry
} from 'aurelia-templating';
import {configure as configureBindingLanguage} from 'aurelia-templating-binding';

var container = new Container(),
    resourceRegistry = document.body.aurelia.container.get(ResourceRegistry),
    viewCompiler,
		resources;

configureBindingLanguage({ container: container });

viewCompiler = container.get(ViewCompiler);

resources = new ViewResources(resourceRegistry, 'app.html');

const iterations = 1000;

export function createBenchmark(benchType, templateOrFragment) {
	switch(benchType) {
		case 'ViewCompiler':
			return deferred => {
			  var i = iterations;
			  while(i--) {
			    viewCompiler.compile(templateOrFragment, resources);
			  }
				deferred.resolve();
			};
		case 'ViewFactory':
			let viewFactory = viewCompiler.compile(templateOrFragment, resources);
			return deferred => {
			  var i = iterations;
			  while(i--) {
			    viewFactory.create(container, new ExecutionContext());
			  }
				deferred.resolve();
			};
		case 'Both':
			return deferred => {
			  var i = iterations;
			  while(i--) {
			    viewCompiler.compile(templateOrFragment, resources).create(container, new ExecutionContext());
			  }
				deferred.resolve();
			};
	}
}

export var template = {
	vanilla:
		`<template>
      <section>
  			<header class="a">Hello World</header>
     		<nav class="b">
  				<ul>
  					<li><a href="#home">Home</a></li>
  					<li><a href="#about">About</a></li>
  					<li><a href="#contact">Contact</a></li>
  				</ul>
  			</nav>
  			<article class="c">
  				<p>Bacon ipsum dolor amet filet mignon shankle t-bone pig ham, short loin pork belly brisket. Pastrami filet mignon porchetta boudin beef tri-tip. Swine pork loin pastrami drumstick, fatback capicola ham jerky pork chop. Bresaola chicken tongue pork belly venison porchetta t-bone, frankfurter boudin ham hock spare ribs ribeye tail pig rump. Flank drumstick short loin capicola, pork loin doner tail porchetta shank kevin boudin alcatra. Sirloin pork ground round turkey turducken, ball tip pork chop cow jerky pork belly andouille ribeye brisket beef ribs fatback.</p>
  				<p>Shankle frankfurter cow, brisket turducken shank ball tip ground round filet mignon swine flank. Shankle ball tip pig turducken corned beef. Shankle ball tip venison jowl biltong pastrami, cow kielbasa filet mignon meatloaf. Frankfurter chicken brisket doner, tongue beef turducken bacon tail.</p>
  			</article>
  			<aside class="e">
  				<ul>
  					<li><a href="#buy-this">Buy this!</a></li>
            <li><a href="#buy-that">Buy that!</a></li>
            <li><a href="#buy-those">Buy those!</a></li>
  				</ul>
  			</aside>
  			<footer class="f">Goodbye World</footer>
      </section>
		</template>`,

	bindingsOnly:
		`<template>
      <section>
  			<header class="\${a}">Hello World</header>
     		<nav class="\${b}">
  				<ul>
  					<li repeat.for="nav of navs"><a href.bind="nav.href">\${nav.title}</a></li>
  				</ul>
  			</nav>
  			<article class="\${c}">
  				<p>Bacon ipsum \${dolor} amet filet mignon shankle t-bone pig ham, short loin pork belly brisket. Pastrami filet mignon porchetta boudin beef tri-tip. Swine pork loin pastrami drumstick, fatback capicola ham jerky pork chop. Bresaola chicken tongue pork belly venison porchetta t-bone, frankfurter boudin ham hock \${spare} ribs ribeye tail pig rump. Flank drumstick short loin capicola, pork loin doner tail porchetta shank kevin boudin alcatra. Sirloin pork ground round turkey turducken, ball tip pork chop cow jerky pork belly andouille ribeye brisket beef ribs fatback.</p>
  				<p>Shankle frankfurter cow, \${brisket} turducken shank ball \${tip} ground round filet mignon swine flank. Shankle ball tip pig turducken corned beef. Shankle ball tip venison jowl biltong pastrami, cow kielbasa filet mignon meatloaf. Frankfurter chicken brisket doner, tongue beef turducken bacon tail.</p>
  			</article>
  			<aside class="\${e}">
  				<ul>
            <li repeat.for="ad of ads"><a href.bind="ad.href">\${ad.title}</a></li>
  				</ul>
  			</aside>
  			<footer class="f">Goodbye World</footer>
      </section>
		</template>`,

	behaviorsOnly:
		`<template>
      <section>
  			<point foo></point>
  	    <point bar></point>
  	    <point baz></point>
  			<point foo></point>
  	    <point bar></point>
  	    <point baz></point>
  			<point foo></point>
  	    <point bar></point>
  	    <point baz></point>
  			<point foo></point>
  	    <point bar></point>
  	    <point baz></point>
      </section>
		</template>`,

	bindingsAndBehaviors:
		`<template>
      <section>
  			<header class="\${a}">Hello World</header>
     		<nav class="\${b}">
  				<ul>
  					<li repeat.for="nav of navs"><a href.bind="nav.href">\${nav.title}</a></li>
  				</ul>
  			</nav>
  			<article class="\${c}">
  				<p>Bacon ipsum \${dolor} amet filet mignon shankle t-bone pig ham, short loin pork belly brisket. Pastrami filet mignon porchetta boudin beef tri-tip. Swine pork loin pastrami drumstick, fatback capicola ham jerky pork chop. Bresaola chicken tongue pork belly venison porchetta t-bone, frankfurter boudin ham hock \${spare} ribs ribeye tail pig rump. Flank drumstick short loin capicola, pork loin doner tail porchetta shank kevin boudin alcatra. Sirloin pork ground round turkey turducken, ball tip pork chop cow jerky pork belly andouille ribeye brisket beef ribs fatback.</p>

  				<p>Shankle frankfurter cow, \${brisket} turducken shank ball \${tip} ground round filet mignon swine flank. Shankle ball tip pig turducken corned beef. Shankle ball tip venison jowl biltong pastrami, cow kielbasa filet mignon meatloaf. Frankfurter chicken brisket doner, tongue beef turducken bacon tail.</p>
  			</article>
  			<aside class="\${e}">
  				<ul>
            <li repeat.for="ad of ads"><a href.bind="ad.href">\${ad.title}</a></li>
  				</ul>
  			</aside>
  			<footer class="f">Goodbye World</footer>
      </section>
      <section>
		    <point foo x.bind="a" y.bind="n"></point>
		    <point bar x.bind="b" y.bind="o"></point>
		    <point baz x.bind="c" y.bind="p"></point>
		    <point foo x.bind="d" y.bind="q"></point>
		    <point bar x.bind="e" y.bind="r"></point>
		    <point baz x.bind="f" y.bind="s"></point>
		    <point foo x.bind="g" y.bind="t"></point>
		    <point bar x.bind="h" y.bind="u"></point>
		    <point baz x.bind="i" y.bind="v"></point>
		    <point foo x.bind="j" y.bind="w"></point>
		    <point bar x.bind="k" y.bind="x"></point>
		    <point baz x.bind="l" y.bind="y"></point>
		    <point foo x.bind="m" y.bind="z"></point>
      </section>
		</template>`,

  contentSelectors:
    `<template>
      <content-selectors>
        <modal-header>foo</modal-header>
        <modal-body>bar</modal-body>
        <modal-footer>baz</modal-footer>
      </content-selectors>
    </template>`,

  templateParts:
    `<template-parts items.bind="planets">
      <template replace-part="item-template">
        <li>\${item.name} \${item.diameter}</li>
      </template>
    </template-parts>`,

  compileSurrogateBehaviors:
    `<template class="\${foo} \${bar} \${baz}" hello.bind="world">
      <div>
      </div>
    </template>`,

  createSurrogateBehaviors:
    `<template>
      <surrogate-behaviors></surrogate-behaviors>
    </template>`
}

class ExecutionContext {
  a = 'a';
  b = 'b';
  c = 'c';
  d = 'd';
  e = 'e';
  f = 'f';
  g = 'g';
  h = 'h';
  i = 'i';
  j = 'j';
  k = 'k';
  l = 'l';
  m = 'm';
  n = 'n';
  o = 'o';
  p = 'p';
  q = 'q';
  r = 'r';
  s = 's';
  t = 't';
  u = 'u';
  v = 'v';
  w = 'w';
  x = 'x';
  y = 'y';
  z = 'z';
  dolar = 'dolar';
  brisket = 'brisket';
  tip = 'tip';
  navs = [{ href: "#home", title: "Home"}, { href: "#about", title: "About"}, { href: "#contact", title: "Contact"}];
  ads = [{ href: "#buy-this", title: "Buy This!"}, { href: "#buy-that", title: "Buy That!"}, { href: "#buy-those", title: "Buy Those!"}];
  planets = [
    { name: 'Mercury', diameter: 3032 },
    { name: 'Venus', diameter: 7521 },
    { name: 'Earth', diameter: 7926 },
    { name: 'Mars', diameter: 4222 },
    { name: 'Jupiter', diameter: 88846 },
    { name: 'Saturn', diameter: 74898 },
    { name: 'Uranus', diameter: 31763 },
    { name: 'Neptune', diameter: 30778 }];
}
