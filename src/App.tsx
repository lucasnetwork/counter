import { createSignal, type Component } from 'solid-js';


const App: Component = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div class="flex flex-col w-screen h-screen items-center justify-center bg-gray-700" >
      <h1 class='mb-2 text-white text-2xl'>Testing deploy</h1>
      <h2 class='mb-2 text-white text-xl'>Counter</h2>

      <button class="bg-blue-500 px-4 py-2 rounded-xl text-white cursor-pointer" onclick={() => setCount(count() + 1)}>
        counter:{count()}
      </button>
    </div>
  );
};

export default App;
