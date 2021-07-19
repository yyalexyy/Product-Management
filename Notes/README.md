# Notes

## Angular
A JS framework<br/>
For building client-side app<br/>
Using HTML, CSS and Typescript<br/>

Typescript is the programming language we use when building Angular app

---
## Why Angular?

> **Expressive HTML:** Can embed logic like if loops, for loops and local variable directly into HTML.
>
> **Powerful Data Biding:** Lets us connect out data diretly to our UI
>
> **Modular By Design:** Build our app as a set of buidling blocks. Makes it easier to create and reuse content
>
> **Built-in Back-End Integration:** Built-in support to communicate with backend server. Make it easy for our app to get and post data. Or execute server-side buisness logic.

---
## Buidling Block
- **App** = Component + Component + Component + ....<br/>

- **Component** = Template (UI) + Class (Code) + Metadata (Extra Data)
    - **Template:** HTML defining a view for the application. ***(Baiscally the UI)***

    - **Class:** Class is for the code associated with the view.<br/>
        Contains the properties or data elements available for binding to the view.<br/>
        Contains methods, provides actions for the view, such as respoonding to a button click.<br/>
        ***(Think of it as the code behind UI)***

    - **Metadata:** provides additional info to Angular.

- **Services** provides functionality across those componnets, such as access data from a backend server and standard login.

---
## Other
JS is the language for the web.

> **Typescript:**<br/>
    Is an opern-source language developed by Microsoft.<br/>
    A superset of JS, menaing all JS is valid Typescript.<br/>
    Typescript code transpiles to plain JS. (Code developed with Typescript must be compiled and converted to comparable JS syntax vefore the browser executes it)<br/>
    **Key benefits:** Strong typing, meaning that everything has a data type.<br/>
    Typescript implements ES 2015 class-based object orientation, plus more. It implements classes, interfaces, inheritances.

``` Install VS code, npm (install it by installing node)```

---
### *Data binding*:<br/>

    Interpolation: `{{pageTitle}}` , inserts interpolated strings into the text between HTML elements or assigns element properties.

    Property binding: `<img [src]='product.imageUrl'>` , sets an HTML element property to the value of a template expression.

    Event binding: `<button (click)='toggleImage()>` , listens for events from the UI and executes a component method when the event occurs.

    Two-way binding: `<input [(ngModel)]='listFilter />` , displays a componenet property and updates that property when the user makes a change in an input element.


### *Pipes:* 
When data is not in the format appropriate for display, we use pipes. Pipes transform bound propertis before display. (Built-in pipes: date, number, decimal, percent, currency, json, etc.)

### *Interface:*
An interface is a specification identifying a related set of properties and methods. 
Two primary ways to use an interface: 
1. Use an interface to identify the properties for a specific type. Ex: have all the properties for the product object in an interface, and in the component class, we can define the type as the interface.
2. Use an interface to identify a feature set. We declare the properties and methods required to implement a specific feature. Declarations only, no code.