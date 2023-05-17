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
}

.pagination-item.active {
  background-color: #ccc;
}
</style>
