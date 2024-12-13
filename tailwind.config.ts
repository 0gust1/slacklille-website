import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import defaultColors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'
const fontSizes = defaultTheme.fontSize;
const fontFamilies = defaultTheme.fontFamily;
delete defaultColors['lightBlue'];
delete defaultColors['warmGray'];
delete defaultColors['trueGray'];
delete defaultColors['coolGray'];
delete defaultColors['blueGray'];

export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],

	theme: {
			fontFamily: {
				...fontFamilies,
				"metropolis": ["Metropolis", "-apple-system", "BlinkMacSystemFont", 'Segoe UI', "Roboto", 'Open Sans', 'Helvetica Neue', "sans-serif"],
				"impact": ["Impact", "sans-serif"],
			},
			fontSize: {
				...fontSizes,
				"2xs": ".625rem",
				"3xs": ".5rem"
			},
			"colors": {
				...defaultColors,
				"slackblue": {
					50: "#F4F6FB",
					100: "#ECF0F9",
					200: "#D9E1F2",
					300: "#BECCE9",
					400: "#A3B7E0",
					500: "#849ED6",
					600: "#6E8CCF",
					700: "#5B7DC8",
					800: "#3E66BB",
					900: "#2D4986",
					950: "#1D3058"
				},
				"slackviolet": {
					50: "#F4F2FC",
					100: "#EDEAFB",
					200: "#D8D0F5",
					300: "#C0B3EF",
					400: "#9D89E7",
					500: "#6E50DB",
					600: "#6141D8",
					700: "#5734D5",
					800: "#4525B6",
					900: "#301A7F",
					950: "#1B0F48"
				},
				"slackvioletalt": {
					50: "#F1EEFC",
					100: "#E3DDF8",
					200: "#C3B7F0",
					300: "#A795E9",
					400: "#8B73E2",
					500: "#6E50DB",
					600: "#4B29C7",
					700: "#381E94",
					800: "#251461",
					900: "#130A33",
					950: "#0A0519"
				},
				"slackvioletaltt": {
					50: "#F5F3FC",
					100: "#EEEBFA",
					200: "#DAD2F4",
					300: "#C2B6EC",
					400: "#A695E4",
					500: "#7F67D8",
					600: "#7054D3",
					700: "#6648D0",
					800: "#5132C3",
					900: "#3A238A",
					950: "#291961"
				},
				"slackbeige": {
					50: "#FBF9F4",
					100: "#F7F3E8",
					200: "#F1E8D5",
					300: "#E8DABA",
					400: "#E0CDA3",
					500: "#D6BC84",
					600: "#CBAA62",
					700: "#B8913D",
					800: "#997933",
					900: "#6B5424",
					950: "#4D3C1A"
				},
				"slackteal": {
					50: "#F4FAFB",
					100: "#ECF6F9",
					200: "#D5ECF1",
					300: "#BAE0E8",
					400: "#9FD3DF",
					500: "#84C7D6",
					600: "#5EB6C9",
					700: "#3DA1B8",
					800: "#338699",
					900: "#25616F",
					950: "#1A434D"
				},
				"slackgreen": {
					50: "#F9FCEE",
					100: "#F4F9E1",
					200: "#E9F3C4",
					300: "#DAEB9E",
					400: "#CDE47C",
					500: "#BDDB50",
					600: "#A5C729",
					700: "#90AD24",
					800: "#7B941E",
					900: "#586A16",
					950: "#3F4C10"
				},
				"slackpink": {
					50: "#FAF2FC",
					100: "#F4E6FA",
					200: "#E9CCF5",
					300: "#DCAFEE",
					400: "#CC89E7",
					500: "#B450DB",
					600: "#A938D6",
					700: "#9728C3",
					800: "#7D21A1",
					900: "#591772",
					950: "#3E1150"
				}
			}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
