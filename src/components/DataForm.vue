<template>
	<div class="max-w-4xl mx-auto">
		<form id="form" class="bg-white shadow-lg xl:rounded-lg lg:rounded-lg md:rounded-lg sm:rounded-none p-6">
			<h1 class="block text-gray-700 font-bold mb-2 text-xl text-center">Form pendataan warga</h1>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="nama">
					Nama
				</label>
				<input class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" name="nama" id="nama" type="text" v-model="$v.nama.$model">
				<div v-if='$v.nama.$dirty'>
					<p class="mt-2 text-sm text-red-600" v-if="!$v.nama.required">Nama lengkap wajib di isi</p>
				</div>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="nik">
					NIK (Nomor induk kependudukan)
				</label>
				<input class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" name="nik" id="nik" type="number" v-model="$v.nik.$model">
				<div v-if='$v.nik.$dirty'>
					<p class="mt-2 text-sm text-red-600" v-if="!$v.nik.required">Nik wajib di isi</p>
					<p class="mt-2 text-sm text-red-600" v-if="$v.nik.required && !$v.nik.minLength && !$v.nik.maxLength">Nik wajib 16 digit</p>
				</div>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="nokk">
					Nomor KK (kartu Keluarga)
				</label>
				<input class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" name="nokk" id="nokk" type="number" v-model="$v.nokk.$model">
				<div v-if='$v.nokk.$dirty'>
					<p class="mt-2 text-sm text-red-600" v-if="!$v.nokk.required">Nomor kartu keluarga wajib di isi</p>
				</div>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="ktp_capture">
					Foto KTP
				</label>
				<input class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" name="ktp_capture" id="ktp_capture" type="file" @change="changeKtp($event)">
				<div v-if='$v.ktp_capture.$dirty'>
					<p class="mt-2 text-sm text-red-600" v-if="!$v.ktp_capture.required">Foto ktp wajib di sertakan</p>
				</div>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="kk_capture">
					Foto Kartu Keluarga
				</label>
				<input class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" name="kk_capture" id="kk_capture" type="file" @change="changeKK($event)">
				<div v-if='$v.kk_capture.$dirty'>
					<p class="mt-2 text-sm text-red-600" v-if="!$v.kk_capture.required">Foto kartu keluarga wajib di sertakan</p>
				</div>
			</div>
			<div class="mb-4">
				<div class="lg:flex lg:max-w-2xl">
					<div class="lg:flex-shrink-0 ">
						<label class="block text-gray-700 text-sm font-bold mb-2">
							Umur
						</label>
						<input class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300 mr-6" name="umur" id="umur" type="number" v-model="$v.umur.$model" placeholder="Umur peserta hanya diperbolehkan 25 tahun keatas">
						<div v-if='$v.umur.$dirty'>
							<p class="mt-2 text-sm text-red-600" v-if="!$v.umur.required">Umur wajib di isi</p>
							<p class="mt-2 text-sm text-red-600" v-if="!$v.umur.minValue">Umur hanya diperbolehkan 25 tahun keatas</p>
						</div>
					</div>
					<div class="lg:pl-6 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-6 mt-6">
						<label class="block text-gray-700 text-sm font-bold mb-2">
							Jenis Kelamin
						</label>
						<div class="flex flex-wrap content-center mt-4">
							<label class="inline-flex items-center">
								<input class="inline-flex content-center" type="radio" id="laki_laki" name="gender" v-model="$v.jenis_kelamin.$model" value="Laki-laki" checked>
								<span class="ml-2" for="laki_laki">Laki-Laki</span>
							</label>
							<label class="inline-flex items-center ml-6">
								<input class="inline-flex" type="radio" id="perempuan" name="gender" v-model="$v.jenis_kelamin.$model" value="perempuan">
								<span class="ml-2" for="female">Perempuan</span>
							</label>
						</div>
					</div>
				</div>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="alamat">
					Alamat
				</label>
				<textarea class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" name="alamat" id="alamat" type="text" placeholder="Contoh : Komplek jasmani, Jl. Rohani no.16, Margahayu, Sayati, Kab.Bandung, Jawa Barat" v-model="$v.alamat.$model"></textarea>
				<div v-if='$v.alamat.$dirty'>
					<p class="mt-2 text-sm text-red-600" v-if="!$v.alamat.required">Alamat wajib di isi</p>
				</div>
			</div>
			<div class="mb-6 flex flex-wrap -mx-3w-full">
				<div class="w-full">
					<label class="block text-gray-700 text-sm font-bold mb-2">
						RT/RW
					</label>
					<div class="grid grid-cols-2 gap-x-4">
						<input class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300 mr-6" name="rt" id="rt" type="text" v-model="$v.rt.$model">
						<input class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" name="rw" id="rw" type="text" v-model="$v.rw.$model">
						<div v-if='$v.rt.$dirty'>
							<p class="mt-2 text-sm text-red-600" v-if="!$v.rt.required">RT wajib di isi</p>
						</div>
						<div v-if='$v.rw.$dirty'>
							<p class="mt-2 text-sm text-red-600" v-if="!$v.rw.required">RW wajib di isi</p>
						</div>
					</div>
				</div>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="penghasilan_sebelum">
					Penghasilan sebelum pandemi
				</label>
				<input class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" name="penghasilan_sebelum" id="penghasilan_sebelum" type="number" v-model="$v.penghasilan_sebelum.$model">
				<div v-if='$v.penghasilan_sebelum.$dirty'>
					<p class="mt-2 text-sm text-red-600" v-if="!$v.penghasilan_sebelum.required">Penghasilan sebelum pandemi wajib di isi</p>
				</div>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="penghasilan_setelah">
					Penghasilan setelah pandemi
				</label>
				<input class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" name="penghasilan_setelah" id="penghasilan_setelah" type="number" v-model="$v.penghasilan_setelah.$model">
				<div v-if='$v.penghasilan_setelah.$dirty'>
					<p class="mt-2 text-sm text-red-600" v-if="!$v.penghasilan_setelah.required">Penghasilan setelah pandemi wajib di isi</p>
				</div>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="alasan">
					Alasan membutuhkan bantuan
				</label>
				<select class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" name="alasan" id="alasan" v-model="$v.alasan.$model">
					<option selected="true" disabled>Pilih salah satu</option>
					<option>Kehilangan pekerjaan</option>
					<option>Kepala keluarga terdampak atau korban Covid</option>
					<option>Tergolong fakir/miskin semenjak sebelum Covid,</option>
					<option>Lainnya</option>
				</select>
				<div v-if='$v.alasan.$dirty'>
					<p class="mt-2 text-sm text-red-600" v-if="!$v.alasan.required">Alasan membutuhkan bantuan wajib di pilih</p>
				</div>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="alasan">
					Konfirmasi
				</label>
				<label class="inline-flex items-center">
					<input type="checkbox" class="form-checkbox h-4 w-4" v-model="verifikasi">
					<span class="ml-2">Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut.</span>
				</label>
			</div>
			<div class="flex items-center justify-between">
				<button v-if="!loading_state" id="button" class="transform hover:scale-110 disabled:opacity-50 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" :disabled='!buttonState' @click="onSubmit">
					Simpan data
				</button>
				<sync-loader v-else :loading="loading" :color="color" :size="size"></sync-loader>
			</div>
		</form>
	</div>

</template>

<script>
import {
	required,
	minLength,
	maxLength,
	minValue,
} from "vuelidate/lib/validators";
import SyncLoader from "vue-spinner/src/SyncLoader.vue";
export default {
	props: {
		msg: String,
	},
	components: {
		SyncLoader: SyncLoader,
	},
	data() {
		return {
			publicPath: process.env.BASE_URL,
			nama: "",
			nik: "",
			nokk: "",
			ktp_capture: [],
			kk_capture: [],
			umur: "",
			jenis_kelamin: "Laki-laki",
			alamat: "",
			rt: "",
			rw: "",
			penghasilan_sebelum: "",
			penghasilan_setelah: "",
			alasan: "",
			verifikasi: false,
			loading_state: false,
			loader_color: "#10B981",
		};
	},
	computed: {
		buttonState() {
			return this.verifikasi && !this.$v.$invalid;
		},
	},
	methods: {
		changeKtp(event) {
			this.ktp_capture = event.target.files[0];
		},
		changeKK(event) {
			this.kk_capture = event.target.files[0];
		},
		onSubmit(e) {
			e.preventDefault();
			this.$v.$touch();
			const root = this;
			this.loading_state = true;
			var delayInMilliseconds = 1500;
			if (!this.$v.$invalid) {
				let request = {
					nama: this.nama,
					nik: this.nik,
					nokk: this.nokk,
					ktp_capture: this.ktp_capture,
					kk_capture: this.kk_capture,
					umur: this.umur,
					jenis_kelamin: this.jenis_kelamin,
					alamat: this.alamat,
					rt: this.rt,
					rw: this.rw,
					penghasilan_sebelum: this.penghasilan_sebelum,
					penghasilan_setelah: this.penghasilan_setelah,
					alasan: this.alasan,
				};
				setTimeout(function () {
					root.loading_state = false;
					let response = Math.random() < 0.5;
					if (response) {
						root.$toast.success("Berhasil menambahkan data", {
							position: "top-right",
							onClose: function () {
								console.log("Pesan tertutup");
							},
						});
					} else {
						root.$toast.error(
							"Gagal menambahkan data, coba beberapa saat lagi",
							{
								position: "top-right",
								onClose: function () {
									console.log("Pesan tertutup");
								},
							}
						);
					}
					console.log(request);
				}, delayInMilliseconds);
			}
		},
	},
	validations: {
		nama: { required },
		nik: { required, minLength: minLength(16), maxLength: maxLength(16) },
		nokk: { required },
		ktp_capture: {
			required: function () {
				return this.ktp_capture.length != 0;
			},
		},
		kk_capture: {
			required: function () {
				return this.kk_capture.length != 0;
			},
		},
		umur: { required, minValue: minValue(24) },
		jenis_kelamin: { required },
		alamat: { required },
		rt: { required },
		rw: { required },
		penghasilan_sebelum: { required },
		penghasilan_setelah: { required },
		alasan: { required },
	},
};
</script>
