<script>
	import AddTodoSection from '../lib/components/todo/AddTodoSection.svelte';
	import TodoSection from '../lib/components/todo/TodoSection.svelte';
	import ProgressSection from '../lib/components/progress/ProgressSection.svelte';
</script>

<div class="bg-olive-one selection:bg-green-two min-h-screen p-0 md:px-8 md:py-24">
	<main
		class="bg-cream-four md:outline-cream-four mx-auto min-h-screen max-w-none rounded-none px-5 py-10 outline-none md:min-h-max md:max-w-[60rem] md:rounded-2xl md:px-8 md:outline md:outline-4 md:outline-offset-8"
	>
		<h1 class="text-gray-three text-2xl font-bold">Dashboard</h1>
		<div class="mt-10" />
		<AddTodoSection />
		<TodoSection />
		<ProgressSection />
	</main>
</div>
