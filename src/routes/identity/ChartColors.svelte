<script lang="ts">
	import tailwindConfig from '../../../tailwind.config';
  import ColorTable from './ColorTable.svelte';
	const colors = tailwindConfig.theme.colors;

	// extract the default colors from the tailwind config
	// => filter out keys: 'inherit', 'transparent', 'current', 'black', 'white'
	const allColors = Object.keys(colors).reduce((acc, key) => {
		if (!['inherit', 'transparent', 'current', 'black', 'white'].includes(key)) {
			acc[key] = colors[key];
		}
		return acc;
	}, {} as Record<string, Record<number, string>>);

	// extract the slacklille colors from the tailwind config
	// => keep only the keys that begin with: 'slack'
	const slacklilleColors = Object.keys(allColors).reduce((acc, key) => {
		if (key.startsWith('slack')) {
			acc[key] = colors[key];
		}
		return acc;
	}, {} as Record<string, Record<number, string>>);

	// extract the default colors from the tailwind config
	// => keep only the keys that does not begin with: 'slack'
	const defaultColors = Object.keys(allColors).reduce((acc, key) => {
		if (!key.startsWith('slack')) {
			acc[key] = colors[key];
		}
		return acc;
	}, {} as Record<string, Record<number, string>>);
</script>

<h3>SlackLille colors</h3>
<p>Colors derived from artistic direction</p>
<p>Shades generated using <a href="https://www.tints.dev/?slackblue=849ED6&slackpurple=6E50DB&slackbeige=D6BC84&slackteal=84C7D6&slackgreen=BDDB50&slackpink=B450DB">https://www.tints.dev/</a></p>
<ColorTable colors={slacklilleColors} />

<h3>Default TailwindCSS colors</h3>
<ColorTable colors={defaultColors} />
