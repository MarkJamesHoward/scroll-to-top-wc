[![edit-in-WebComponents.dev](https://webcomponents.dev/assets/ext/edit_in_wcd.svg)](https://webcomponents.dev/edit/6RAfRdXa9sNUnJYe1M02)
# \<scroll-to-top-wc\>

This Web Component scrolls the page to the top upon clicking the toast notification. The notification will display once a certain scroll depth is reached and remain visible from this point onwards. For very long pages this is a quick shorcut to the top of the page rather than having to use the scroll bar which can be cumbersome.

## Install with

```
npm i scroll-to-top-wc
```

## Import using the below syntax:

```
import "scroll-to-top-wc";
```

## Then add the element to your page as below:

```
<scroll-to-top-wc></scroll-to-top-wc>
```

### Activate When

Use the activatewhen property to determine when the toast notification is shown. This value is in pixels and by default is set to 200. The below will mean we need to scroll down twice as far before the toast notification is shown

```
<scroll-to-top-wc activatewhen="400"></scroll-to-top-wc>
```

### Customize Display Text

The text displayed by the toast notification can be customised using light DOM nodes as below. Note that we need to specify SLOT='TEXT' for the node that will display the text on the toast notification

```
<scroll-to-top-wc>
  <div slot="text">Move this to the top3</div>
</scroll-to-top-wc>
```

### Smooth Scrolling:

In order for the page to scroll to the top in a smooth fasion you will need to apply the below CSS to the document body:

```
scroll-behavior: smooth;
```

### Styling

The component can be styled using CSS Shadow Parts. The part 'container' can be selected to allow any CSS to be applied as shown in the below example:

```
 scroll-to-top-wc::part(container) {
        background: blue;
        border: 5px solid black;
      }
```

For browsers that do not support CSS Shadow Parts, the below CSS Custom Properties can be set to style a limited part of the component:

```
--scroll-top-background-color
--scroll-top-color
```

### Testing

Clone the repository with the below:

```
git clone https://github.com/MarkJamesHoward/ScrollToTop.git
```

install dependencies

```
npm install
```

Then open the 'index.html' in the demo folder using parcel

```
npm i -g parcel
cd \demo
parcel index.html
```

> Created with [WebComponents.dev](https://webcomponents.dev)
