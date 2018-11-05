# TripSegment

To implement TripSegment component into your project you'll need import component itself and pass any other component you want as children.

```jsx
import TripSegment from "@kiwicom/orbit-components/lib/TripSegment";

// e.g. List component
import List from "@kiwicom/orbit-components/lib/List";
import ListItem from "@kiwicom/orbit-components/lib/List/ListItem";
```

After adding import into your project you can use it simply like:

```jsx
<TripSegment>
  <List>
    <ListItem>Hello, World!</ListItem>
    <ListItem>Lorem Ipsum</ListItem>
  </List>
</TripSegment>
```

## Props

Table below contains all types of the props available in TripSegment component.

| Name              | Type                    | Default     | Description
| :---------------- | :---------------------- | :---------- | :---------------------------------------------------------------------------------------- |
| **arrival**       | `string`                |             | The arrival city name and short code.
| **arrivalTime**   | `string`                |             | The arrival time.
| **carrier**       | `Carrier`               |             | It's used to render proper icon in the Milestone, by Carrier type. [`See Carrier type`](https://github.com/kiwicom/orbit-components/tree/master/src/CarrierLogo#user-content-carrier)
| **children**      | `React.Node`            |             | The content of the component.
| **departure**     | `string`                |             | The departure city and short code.
| **departureTime** | `string`                |             | The departure time.
| **duration**      | `string \| number`      |             | The flight duration.
| initialExpanded   | `boolean`               | `false`     | If `true`, the children will be displayed by default.
| onClick           | `func \| Promise<any>`  |             | Function for handling onClick event.
