# Answers

1.  What is React JS and what problems does it try and solve?

    React is a User Interface Component Library built by FB to help solve some of the major problems the team was facing when dealing w complex data state. It is not a framework but only a Library that does one thing really well, rendering UI.

2.  What does it mean to _think_ in react?

    Thinking in react means breaking down to the component level so you can have as much DRY code as possible.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    The most obvious one difference is the syntax. A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element. A class component requires you to extend from React.Component and create a render function which returns a React element.

4.  Describe state.
    
    State is something described as the 'heart' of a React Application. State is the data, that our components can hold onto and pass around to other components. When state updates, so to will our components thus making them 'reactive'. State is what drives our application. State is mutable, but only through a special function called 'setState'

5.  Describe props.

    Every component CAN receive props. If state is known as the heart of the component, you can think of props as the blood that the heart pumps throughout the system. Functional components receive props as an object passed in as an argument. Props are immutable. Meaning you cannot change their assignment but you can only read them. They can be passed around from top down, or even bottom up through event handlers. Components never modify their own props, because all functions/classes in React are pure.
