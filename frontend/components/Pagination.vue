<template>
  <div class="pagination">
    <button
      v-for="page in totalPages"
      :key="page"
      :class="['pagination-item', { active: currentPage === page }]"
      @click="changePage(page)"
    >
      {{ page }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.perPage);
    },
  },
  methods: {
    changePage(page) {
      this.$emit('pageChange', page);
    },
  },
};
</script>
<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.pagination-item {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: #fff;
  transition: background-color 0.3s ease; /* Transisi warna latar belakang saat hover */
}

.pagination-item.active {
  background-color: #4a9eff; /* Warna latar belakang saat aktif */
  color: #fff; /* Warna teks saat aktif */
}

.pagination-item:hover {
  background-color: #e0e0e0; /* Warna latar belakang saat hover */
}
</style>
