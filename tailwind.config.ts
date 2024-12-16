import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import defaultColors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
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
			metropolis: [
				'Metropolis',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Open Sans',
				'Helvetica Neue',
				'sans-serif'
			],
			impact: ['Impact', 'sans-serif']
		},
		fontSize: {
			...fontSizes,
			'2xs': '.625rem',
			'3xs': '.5rem'
		},
		colors: {
			...defaultColors,
			// generated from: https://www.tints.dev/?slackblue=849ED6&slackpurple=6E50DB&slackbeige=D6BC84&slackteal=84C7D6&slackgreen=BDDB50&slackpink=B450DB
			slackblue: {
				50: '#F4F6FB',
				100: '#E8EDF7',
				200: '#CDD8EE',
				300: '#B6C6E7',
				400: '#9CB1DE',
				500: '#849ED6',
				600: '#577AC7',
				700: '#385CA8',
				800: '#2A457E',
				900: '#1B2C50',
				950: '#131F39'
			},
			slackviolet: {
				50: '#F1EEFC',
				100: '#E3DDF8',
				200: '#C3B7F0',
				300: '#A795E9',
				400: '#8B73E2',
				500: '#6E50DB',
				600: '#502BD4',
				700: '#4325B2',
				800: '#351D8C',
				900: '#28166A',
				950: '#201155'
			},
			slackbeige: {
				50: '#FBF9F4',
				100: '#F7F3E8',
				200: '#EEE4CD',
				300: '#E7D7B6',
				400: '#DEC99C',
				500: '#D6BC84',
				600: '#C7A357',
				700: '#A88538',
				800: '#7A6129',
				900: '#4D3C1A',
				950: '#362A12'
			},
			slackteal: {
				50: '#F4FAFB',
				100: '#E8F5F7',
				200: '#CDE8EE',
				300: '#B6DEE7',
				400: '#9CD2DE',
				500: '#84C7D6',
				600: '#53B1C6',
				700: '#3790A4',
				800: '#266573',
				900: '#173C45',
				950: '#0E252A'
			},
			slackgreen: {
				50: '#F9FCEE',
				100: '#F2F8DD',
				200: '#E4F0B7',
				300: '#D7E995',
				400: '#CAE273',
				500: '#BDDB50',
				600: '#A5C729',
				700: '#7E981F',
				800: '#586A16',
				900: '#313B0C',
				950: '#202608'
			},
			slackpink: {
				50: '#F8EEFC',
				100: '#F0DDF8',
				200: '#E0B7F0',
				300: '#D195E9',
				400: '#C373E2',
				500: '#B450DB',
				600: '#A12BCF',
				700: '#8022A5',
				800: '#5F197B',
				900: '#3E1150',
				950: '#2E0C3B'
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
