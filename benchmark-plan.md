# Benchmark Plan

## Micro Benchmarks

### Dependency Injection

* manually registration: transient, singleton, instance
* instance resolution: transient, singleton, instance
* child container creation
* resolve transient, singleton, instance through child, when they are registered with the parent
* resolve transient, singleton, instance through 4th level child, when they are registered with the root
* auto-registration: with and without registration metadata

### Binding

* Fresh parse a simple property expression
* Cached parse of simple property expression
* Parse a complex property expression
* Cached parse of complex property expression
* locate observers: elements, properties, computeds, custom
* observe a single property: O.o and Setter
* unobserve a single property: O.o and Setter
* notify of property change: O.o and Setter
* Given a binding instance, call "bind" with a particular source. Use a variety of simple and complex expressions, one-way, two-way and one-time bindings as well
* parse a string interpolation: single segment and multiple

### Templating (pre-load templates and resources)

* compile/instantiate a view with no bindings or behaviors
* compile/instantiate a view with bindings
* compile/instantiate a view with behaviors
* compile/instantiate a view with bindings and behaviors
* compiler/instantiate a view with content selectors

## Macro Benchmarks

* Render a simple form
* Render a complex form
* Render a simple table
* Render a complex table
