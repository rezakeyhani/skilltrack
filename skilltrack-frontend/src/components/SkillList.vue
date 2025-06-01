<template>
  <div v-if="skills.length">
    <h2 class="text-xl font-semibold mb-2">لیست مهارت‌ها</h2>
    <ul class="space-y-2">
      <li v-for="skill in skills" :key="skill.id" class="bg-white p-3 rounded shadow">
        {{ skill.name }} - {{ skill.level }}
      </li>
    </ul>
  </div>
  <p v-else>هیچ مهارتی ثبت نشده است.</p>
</template>

<script setup>
defineProps({
  skills: {
    type: Array,
    required: true
  }
})
</script>

