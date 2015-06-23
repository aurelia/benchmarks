# Benchmark Plan

## Micro Benchmarks

### Dependency Injection

* :white_check_mark: manually registration: transient, singleton, instance
* :white_check_mark: instance resolution: transient, singleton, instance
* :white_check_mark: child container creation
* :white_check_mark: resolve transient, singleton, instance through child, when they are registered with the parent
* :white_check_mark: resolve transient, singleton, instance through 4th level child, when they are registered with the root
* :white_medium_square: auto-registration: with and without registration metadata

### Binding

* :white_check_mark: Fresh parse a simple property expression
* :white_check_mark: Cached parse of simple property expression
* :white_check_mark: Parse a complex property expression
* :white_check_mark: Cached parse of complex property expression
* :white_medium_square: locate observers: elements, properties, computeds, custom
* :white_medium_square: observe a single property: O.o and Setter
* :white_medium_square: unobserve a single property: O.o and Setter
* :white_medium_square: notify of property change: O.o and Setter
* :white_medium_square: Given a binding instance, call "bind" with a particular source. Use a variety of simple and complex expressions, one-way, two-way and one-time bindings as well
* :white_medium_square: parse a string interpolation: single segment and multiple

### Templating (pre-load templates and resources)

* :white_medium_square: compile/instantiate a view with no bindings or behaviors
* :white_medium_square: compile/instantiate a view with bindings
* :white_medium_square: compile/instantiate a view with behaviors
* :white_medium_square: compile/instantiate a view with bindings and behaviors
* :white_medium_square: compiler/instantiate a view with content selectors

## Macro Benchmarks

* :white_medium_square: Render a simple form
* :white_medium_square: Render a complex form
* :white_medium_square: Render a simple table
* :white_medium_square: Render a complex table
