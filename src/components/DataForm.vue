<template>
	<div class="max-w-4xl mx-auto">
		<form id="form" class="bg-white shadow-lg rounded-lg m-6 p-6">
			<h1 class="block text-gray-700 font-bold mb-2 text-xl text-center">Form pendataan warga</h1>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="name">
					Nama
				</label>
				<input class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" name="name" id="name" type="text" placeholder="Nama lengkap" required>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="name">
					NIK (Nomor induk kependudukan)
				</label>
				<input class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" name="nik" id="nik" type="number" placeholder="NIK" required>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="name">
					Nomor KK (kartu Keluarga)
				</label>
				<input class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" name="nokk" id="nokk" type="number" placeholder="Nomor kartu keluarga" required>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="ktp_capture">
					Foto KTP
				</label>
				<input class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" name="ktp_capture" id="ktp_capture" type="file" placeholder="">
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="kk_capture">
					Foto Kartu Keluarga
				</label>
				<input class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" name="kk_capture" id="kk_capture" type="file" placeholder="">
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="name">
					Alamat
				</label>
				<textarea class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" name="address" id="address" type="text" placeholder="Alamat lengkap" required></textarea>
			</div>
			<div class="mb-6 flex flex-wrap -mx-3w-full">
				<div class="w-full">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="name">
						RT/RW
					</label>
					<div class="flex">
						<input class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300 mr-6" name="rt" id="rt" type="text" placeholder="Nomor RT" required>
						<input class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" name="rw" id="rw" type="text" placeholder="Nomor RW" required>
					</div>
				</div>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="name">
					Penghasilan sebelum pandemi
				</label>
				<input class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" name="nokk" id="nokk" type="number" placeholder="Nomor kartu keluarga" required>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="name">
					Penghasilan setelah pandemi
				</label>
				<input class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" name="nokk" id="nokk" type="number" placeholder="Nomor kartu keluarga" required>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="name">
					Alasan membutuhkan bantuan
				</label>
				<select class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300">
					<option>Year</option>
				</select>
			</div>
			<div class="flex items-center justify-between">
				<button id="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
					<i class="fab fa-whatsapp"></i> Enviar a WhatsApp
				</button>
			</div>
		</form>
	</div>

</template>

<script>
export default {
	name: "HelloWorld",
	props: {
		msg: String,
	},
	data() {
		return {
			publicPath: process.env.BASE_URL,
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
