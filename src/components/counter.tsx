import { createSignal } from "solid-js";

export default function Counter() {
	const [count, setCount] = createSignal(0);

	return (
		<button
			onClick={() => setCount((count) => count + 1)}
			class="w-fit rounded bg-neutral-200 px-4 py-2 hover:bg-neutral-300"
		>
			Count: {count()}
		</button>
	);
}
