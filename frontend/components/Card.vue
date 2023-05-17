<template>
  <div class="w-full rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <div class="flex justify-between items-center">
        <div class="font-bold text-xl">{{ limitedTitle }}</div>
        <div class="flex items-center">
          <button @click="editNote" class="text-blue-500 cursor-pointer mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
            </svg>
          </button>
          <div @click="deleteNote" class="text-red-500 cursor-pointer">
            <img :src="DeleteIcon" alt="Delete Icon" />
          </div>
        </div>
      </div>
      <p class="text-gray-700 text-base text-justify">{{ limitedDescription }}</p>
    </div>
  </div>
</template>

<script>
import DeleteIcon from '@/assets/icons/DeleteIcon.svg'

export default {
  name: 'Card',
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      DeleteIcon,
    }
  },
  computed: {
    limitedTitle() {
      const MAX_TITLE_LENGTH = 30
      if (this.note.title.length <= MAX_TITLE_LENGTH) {
        return this.note.title
      } else {
        return this.note.title.slice(0, MAX_TITLE_LENGTH) + '...'
      }
    },
    limitedDescription() {
      const MAX_DESCRIPTION_LENGTH = 200
      if (this.note.description.length <= MAX_DESCRIPTION_LENGTH) {
        return this.note.description
      } else {
        return this.note.description.slice(0, MAX_DESCRIPTION_LENGTH) + '...'
      }
    },
  },
  methods: {
    editNote() {
      this.$emit('editNote', this.note.id)
    },
    deleteNote() {
      this.$emit('deleteNote', this.note.id)
    },
  },
}
</script>

<style scoped>
/* Tidak ada CSS tambahan */
</style>
