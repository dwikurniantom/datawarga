<template>
	<div class="home">
		<DataForm msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
// @ is an alias to /src
import DataForm from "@/components/DataForm.vue";

export default {
	name: "Home",
	components: {
		DataForm,
	},
};
</script>
