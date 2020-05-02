# react-component-driven-development-demo

A collection of demos used during a component driven development talk + workshop.

Notes to come soon!

## Notes

### Components

#### What is a component?

```
A component is a uniquely identifiable part, piece, assembly or subassembly, system or subsystem.

Think of a component like a tangible object such as a wheel. A wheel is part of a car but is also made up of other components such as a tire, valve and rim. A car utilizes several wheels in order to move forward relying on other components for propulsion.
```

#### What is a web component?

```
Web components are a suite of various technologies that allow for the construction of custom elements with encapsulated functionality for use in web documents.
```

#### Browser Support

##### Desktop

* Chrome 67+
* Firefox 63+
* Edge 79+
* Safari (Limited) 10.1+

##### Mobile

* Chrome 80+
* Samsung Internet 6.2+
* Safari (Limited) 10.3+

#### What is a single file component (SFC)?

```
A single file component contains all of its template, styles and scripts in a single file.
```

### Component Driven Development (CDD)

#### What is Component Driven Development?

```
Component Driven Development is a development methodology that focuses the build process around components.
```

#### Who is using Component Driven Development?

* Shopify
* Uber
* Airbnb
* Instagram
* Atlassian

#### What some problems that Component Driven Development aims to help solve?

##### Collaboration

```
CDD can help increase collaboration between designers and developers through the use of shared component libraries and component explorers.
```

##### Velocity

```
CDD can allow work to be broken up into smaller tickets, enabling team(s) to build new pages, containers and components in parallel.
```

##### Scale

```
CDD can help companies scale as engineering teams can build and share these component libraries for use in their applications.
```

##### Complexity

```
CDD can redeuce complexity as engineers can focus on understanding individual components, containers and pages rather than the application in it's entirety.
```

#### What are some benefits that Component Driven Development provides?

* Modular
  * Easy to replace / iterate components
  * Faster development
  * Reduced maintenance cost
* Reusable
  * Components can be shared across applications using shared component libraries
* Test Driven
  * Testing a well defined, highly cohesive component is easier than testing entire pages
  * Reduction in the number of potential bugs that may be introduced into an application
  * Easier to find and debug regressions
* Themable
  * Can build a unified look across applications using shared component libraries which can help establish a brand identity across your product(s)
* Reduced complexity
  * Easier to learn about a single component, container or page than it is to learn about an entire application

#### What are some best practices when using Component Driven Development?

* High Cohesion
  * The component should perform a single, well defined task
* Loose Coupling
  * The component should have little to no knowledge of other component(s)
* Reusable
  * Components should be built so that they may be reused and extended upon
* Easily Testable
  * It should be very easy to understand and test the responsibility of each component

#### What are some challenges that Component Driven Development may present?

TODO

##### How can we address some of these challenges?

TODO

## Demo

The demo is an example React component library to show off how we can build and debug components using component driven development. It has has a demo which shows you how we can export static assets such as svg components as components.

## SFC Demo

The SFC demo shows how we can use Vue CLI to build Vue single file components as webcomponents that can be used directly in the DOM.

## Template

The template in this repository can be used as a starting point for a React component library. In contains config files for Webpack, Storybook and Jest to get you started.
