<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppShell, AppBar, storePopup, storeHighlightJs } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	storeHighlightJs.set(hljs);
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<AppShell>
	<svelte:fragment slot="header">
		<div class="fixed top-0 right-0 left-0">
			<AppBar>
				<h3>CodeSnippet</h3>
			</AppBar>
		</div>
	</svelte:fragment>
	<div class="my-14">
		<slot />
	</div>
</AppShell>
