// snippetStore
import { writable, get } from 'svelte/store'

// CodeSnippet properties
// title, language, code, favorite
export const snippetStore = writable<CodeSnippet[]>([])

// addSnippet
export function addSnippet(input: CodeSnippetInput) {
  const snippets = get(snippetStore);
  snippetStore.update(() => [
    ...snippets,
    { ...input, favorite: false }
  ]
  )
}

// deleteSnippet
export function deleteSnippet(index: number) {
  const snippets = get(snippetStore);
  snippets.splice(index, 1)
  snippetStore.update(() => snippets)
}

// toggleFavorite
export function toggleFavorite(index: number) {
  const snippets = get(snippetStore);
  snippets[index].favorite = !snippets[index].favorite
  snippetStore.update(() => snippets)
}