import Vue from "vue";
import Router from "vue-router";
import Guide from "@/components/guide/Guide.vue";
import Counsel from "@/components/counsel/Counsel.vue";
import User from "@/components/user/User.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/guide',
			component: Guide
		},
		{
			path: '/counsel',
			component: Counsel
		},
		{
			path: '/user/:id',
			name: 'user',
			component: User
		}
	]
})
