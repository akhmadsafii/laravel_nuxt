<template>
  <div class="modal fixed inset-0 flex items-center justify-center">
    <div class="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>
    <div class="modal-container bg-white w-1/2 rounded-lg overflow-hidden">
      <div
        class="modal-header flex justify-between items-center px-4 py-2 bg-gray-100"
      >
        <h2 class="text-lg font-semibold">Edit Catatan</h2>
        <button
          class="modal-close text-gray-500 hover:text-gray-700"
          @click="closeModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <!-- Form Edit Catatan -->
      <form @submit.prevent="saveNote" class="p-4">
        <div class="mb-4">
          <label for="title" class="block text-gray-700 font-bold">Judul</label>
          <input
            type="text"
            id="title"
            v-model="editedNote.title"
            required
            class="border border-gray-300 rounded-lg px-3 py-2 mt-1 w-full"
          />
        </div>
        <div class="mb-4">
          <label for="description" class="block text-gray-700 font-bold"
            >Deskripsi</label
          >
          <textarea
            id="description"
            v-model="editedNote.description"
            required
            class="border border-gray-300 rounded-lg px-3 py-2 mt-1 w-full"
          ></textarea>
        </div>
        <div class="flex justify-end">
          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mr-2"
          >
            Simpan
          </button>
         <button
      type="button"
      class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      @click="deleteNote"
    >
      Hapus
    </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editedNote: {
        id: null,
        title: '',
        description: '',
      },
    }
  },
  mounted() {
    this.initializeNote()
  },
  methods: {
    initializeNote() {
      this.editedNote.id = this.note.id
      this.editedNote.title = this.note.title
      this.editedNote.description = this.note.description
    },
    saveNote() {
      this.$emit('saveNote', this.editedNote)
      this.closeModal()
    },
    closeModal() {
      this.$emit('closeModal')
    },
    deleteNote() {
      this.$emit('deleteNote', this.editedNote.id)
      this.closeModal()
    },
  },
}
</script>

<style scoped>
/* Gaya CSS untuk modal */
.modal {
  z-index: 999;
}

.modal-overlay {
  z-index: -1;
}

.modal-container {
  max-width: 640px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5;
  background-color: #f7fafc;
  border-bottom: 1px solid #e2e8f0;
}

.modal-close {
  cursor: pointer;
  transition: color 0.3s ease;
}

.modal-close:hover {
  color: #718096;
}
</style>
