import Counter from "./components/counter";

export default function App() {
	return (
		<main class="mx-auto flex max-w-[400px] flex-col gap-2 p-4">
			<h1 class="text-4xl">
				Hello World from <span class="font-black text-blue-500">SolidJS</span>
			</h1>
			<Counter />
		</main>
	);
}
