<script>
	import ProgressBar from './ProgressBar.svelte';
	import { todo } from '../../store/TodoStore';

	export let completePercentage = 0;
	export let progressPercentage = 0;

	$: totalCount = $todo.length;
	$: completedCount = $todo.filter((todo) => todo.complete).length;
	$: progressCount = $todo.filter((todo) => !todo.complete).length;
	$: completePercentage = Math.round((completedCount / totalCount) * 100) || 0;
	$: progressPercentage = Math.round((progressCount / totalCount) * 100) || 0;
</script>

<section class="mt-10">
	<h3 class="text-gray-three text-xl font-bold">Progress</h3>
	<div class="mt-8 space-y-8">
		<ProgressBar title="In progress" percentage={progressPercentage} />
		<ProgressBar title="Completed" percentage={completePercentage} />
	</div>
</section>
