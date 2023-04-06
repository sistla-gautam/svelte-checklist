<script>
	export let title;
	export let percentage;

	$: completeClass = title === 'Completed' ? 'bg-green-four' : 'bg-leaf-one';
</script>

<div>
	<div class="text-gray-three flex justify-between text-base font-normal">
		<p>{title}</p>
		<p>{percentage}%</p>
	</div>
	<div class="bg-gray-one mt-5 h-4 w-full overflow-hidden rounded-full">
		<div
			style="width: {percentage}%"
			class="{completeClass} h-4 rounded-full transition-all duration-500 ease-out"
		/>
	</div>
</div>
