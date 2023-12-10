<script lang="ts">
	import { fade } from 'svelte/transition';
	import CodeSnippetCard from '../components/CodeSnippetCard.svelte';
	import { addSnippet, snippetStore } from './snippetStore';
	import type { PageData } from './$types';
	export let data: PageData;

	let formData: CodeSnippetInput = {
		title: '',
		language: 'typescript',
		code: ''
	};

	// should be fetched from any source
	snippetStore.set(data.snippets);
</script>

<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h3 class="text-center py-6">Create a code snippet</h3>
		<div class="card p-4 w-full text-token space-y-4">
			<label for="snippet-title" class="label">
				<span>Snippet Title</span>
				<input
					id="snippet-title"
					type="text"
					class="input"
					placeholder="Enter Title here..."
					bind:value={formData.title}
				/>
			</label>
			<label for="language" class="label">
				<span>Language</span>
				<select id="language" class="select" bind:value={formData.language}>
					<option value="html">HTML</option>
					<option value="css">CSS</option>
					<option value="javascript">JavaScript</option>
					<option value="typescript">Typescript</option>
				</select>
			</label>
			<label for="code" class="label">
				<span>Code</span>
				<textarea
					id="code"
					class="textarea"
					rows="4"
					placeholder="Enter your snippet code here..."
					bind:value={formData.code}
				/>
			</label>
			<button
				type="button"
				class="btn btn-sm variant-filled-primary"
				on:click={() => addSnippet(formData)}>Create Snippet</button
			>
		</div>
		<div>
			<h3 class="text-center py-6">My Code Snippets</h3>
		</div>
		{#each $snippetStore as snippet, id}
			<div out:fade>
				<CodeSnippetCard index={id} {snippet} />
			</div>
		{/each}
	</div>
</div>
