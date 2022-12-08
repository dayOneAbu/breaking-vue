import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import CharacterDetailView from '../views/CharacterDetailView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/character/:id',
			name: 'character_detail',
			component: CharacterDetailView,
		},
		{
			path: '/about',
			name: 'about',
			component: AboutView,
		},
	],
});

export default router;
