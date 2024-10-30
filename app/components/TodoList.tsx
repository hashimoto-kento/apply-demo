const person = {
    name: 'John',
    theme: {
      background: 'white',
      color: 'black',
    }
};

export function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Profile"
        />
      <ul>
        <li>Buy milk</li>
        <li>Go to the gym</li>
        <li>Learn React</li>
      </ul>
    </div>
  );
}