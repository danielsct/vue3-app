<template>
  <div class="p-6 bg-gray-50 flex justify-center items-center">
    <div class="bg-white p-8 rounded-lg shadow-md max-w-7xl w-full">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-extrabold text-gray-800">Tabla random con datos de Faker.js</h1>

        </div>
        <button
          class="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-all"
        >
          Super botón
        </button>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left border-spacing-y-3 border-separate">
          <thead class="hidden">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="user in data"
              :key="user.id"
              class="bg-white shadow-sm rounded-lg hover:bg-gray-100 transition"
            >
              <td class="p-4 font-medium text-gray-800">{{ user.name }}</td>
              <td class="p-4 text-gray-500">{{ user.email }}</td>
              <td class="p-4 text-blue-600 hover:underline cursor-pointer">
                Editar
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <footer class="pt-4">
      <p>Front: Vue 3, Vue-Router + PrimeVue 4 + Tailwind CSS + Vite</p>
        <p>Back: Node.js, Express</p>
    </footer>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'TableView',
  setup() {
    const data = ref([]);
    const loading = ref(true);

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        data.value = await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      data,
      loading,
    };
  },
};
</script>

<style scoped>
table {
  border-spacing: 0 0.5rem;
}

tr {
  border-radius: 0.5rem;
  overflow: hidden;
}

td {
  border: none;
}

tbody > tr {
  transition: background-color 0.2s ease-in-out;
}
</style>
