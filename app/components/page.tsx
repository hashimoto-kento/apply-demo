import Profile from './Profile';
import TestMessage from './TestMessage';
import { TodoList } from './TodoList';

export default function Gallery() {
  return (
    <section>
      <h1>Gallery</h1>
        <Profile />
        <Profile />
        <Profile />
        <TestMessage/>
        <TodoList />
    </section>
  );
}

