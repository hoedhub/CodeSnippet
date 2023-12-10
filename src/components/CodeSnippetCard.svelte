<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { deleteSnippet, toggleFavorite } from '../routes/snippetStore';

	export let index: number;
	export let snippet: CodeSnippet;
</script>

<div class="card">
	<header class="card-header">
		{snippet.title}
		<div class="float-right">
			<button
				type="button"
				class="btn btn-sm variant-filled-secondary"
				on:click={() => toggleFavorite(index)}
			>
				{snippet.favorite ? 'Unfovorite' : 'Favorite'}
			</button>
			<button
				type="button"
				class="btn btn-sm variant-filled-error"
				on:click={() => deleteSnippet(index)}
			>
				&Cross;
			</button>
		</div>
	</header>
	<section class="p-4">
		<CodeBlock language={snippet.language} code={snippet.code} />
	</section>
</div>
