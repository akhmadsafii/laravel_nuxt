<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">My Notes</h1>
      <div class="flex items-center">
        <div class="relative">
          <input
            v-model="searchTerm"
            class="border border-gray-300 rounded-l px-2 py-1 pr-8"
            type="text"
            placeholder="Cari"
            @input="handleSearch"
          />
          <div class="absolute inset-y-0 right-0 flex items-center pr-2">
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>

    <div
      :class="[
        'grid',
        filteredNotes.length > 0 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1',
        'gap-4',
      ]"
    >
      <div v-if="isLoading" class="col-span-2 flex justify-center">
        <LoadingSpinner class="w-12 h-12" />
      </div>
      <div v-else-if="error" class="col-span-2">
        <p>{{ error }}</p>
      </div>
      <template v-else>
        <div v-for="note in paginatedNotes" :key="note.id" class="col-md-6">
          <Card
            :note="note"
            @editNote="openEditModal(note.id)"
            @deleteNote="deleteNote"
          />
        </div>
      </template>
      <div
        v-if="filteredNotes.length === 0 && !isLoading"
        class="flex items-center justify-center"
      >
        <div class="text-gray-500">
          <svg
            class="w-16 h-16 mx-auto mb-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12v.535a3 3 0 0 0 1.5 2.598L12 22l8.5-6.867A3 3 0 0 0 21 12.534V12c0-5.52-4.48-10-10-10zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm1-6h-2v2H9v-2H7V9h2V7h2v2h2v2z"
            />
          </svg>
          <p class="text-xl font-medium">Tidak ada catatan.</p>
        </div>
      </div>
    </div>

    <Pagination
      :total-items="filteredNotes.length"
      :per-page="perPage"
      :current-page="currentPage"
      @pageChange="handlePageChange"
    />
    <EditModal
      v-if="showEditModal"
      :note="selectedNote"
      @saveNote="saveNote"
      @closeModal="closeEditModal"
    />
  </div>
</template>
<script>
import axios from 'axios'
import Card from '@/components/Card.vue'
import Pagination from '@/components/Pagination.vue'
import EditModal from '@/components/EditModal.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

export default {
  components: {
    Card,
    Pagination,
    EditModal,
    LoadingSpinner,
  },
  data() {
    return {
      notes: [],
      currentPage: 1,
      perPage: 10,
      searchTerm: '',
      showEditModal: false,
      selectedNote: null,
      isLoading: false,
      error: null,
    }
  },
  computed: {
    totalNotes() {
      return this.filteredNotes.length
    },
    paginatedNotes() {
      const start = (this.currentPage - 1) * this.perPage
      const end = start + this.perPage
      return this.filteredNotes.slice(start, end)
    },
    filteredNotes() {
      if (this.searchTerm) {
        const searchTermLower = this.searchTerm.toLowerCase()
        return this.notes.filter((note) => {
          const titleLower = note.title.toLowerCase()
          const descriptionLower = note.description.toLowerCase()
          return (
            titleLower.includes(searchTermLower) ||
            descriptionLower.includes(searchTermLower)
          )
        })
      } else {
        return this.notes
      }
    },
  },
  mounted() {
    this.fetchNotes()
  },
  methods: {
    fetchNotes() {
      this.isLoading = true
      this.error = null
      axios
        .get(`${process.env.apiUrl}/notes`)
        .then((response) => {
          this.notes = response.data
        })
        .catch((error) => {
          this.error =
            'Terjadi kesalahan saat mengambil catatan: ' + error.message
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    deleteNote(noteId) {
      axios
        .delete(`${process.env.apiUrl}/notes/${noteId}`)
        .then(() => {
          this.notes = this.notes.filter((note) => note.id !== noteId)
        })
        .catch((error) => {
          this.error =
            'Terjadi kesalahan saat menghapus catatan: ' + error.message
        })
    },
    openEditModal(noteId) {
      this.selectedNote = this.notes.find((note) => note.id === noteId)
      this.showEditModal = true
    },
    saveNote(editedNote) {
      axios
        .put(`${process.env.apiUrl}/notes/${editedNote.id}`, editedNote)
        .then((response) => {
          const updatedNote = response.data
          const index = this.notes.findIndex(
            (note) => note.id === updatedNote.id
          )
          if (index !== -1) {
            this.notes.splice(index, 1, updatedNote)
          }
          this.closeEditModal()
        })
        .catch((error) => {
          this.error =
            'Terjadi kesalahan saat menyimpan catatan: ' + error.message
        })
    },
    closeEditModal() {
      this.showEditModal = false
      this.selectedNote = null
    },
    handlePageChange(page) {
      this.currentPage = page
    },
    handleSearch() {
      this.currentPage = 1
    },
  },
}
</script>

<style scoped>
.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
