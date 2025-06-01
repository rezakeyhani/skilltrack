<template>
  <form @submit.prevent="handleSubmit" class="mb-4 space-y-2">
    <input
      v-model="name"
      type="text"
      placeholder="Skill Name"
      class="border p-2 w-full"
      required
    />
    <input
      v-model="level"
      type="text"
      placeholder="Skill Level"
      class="border p-2 w-full"
      required
    />
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
      افزودن
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { addSkill } from '../api.js'

const name = ref('')
const level = ref('')
const emit = defineEmits(['skill-added'])

const handleSubmit = async () => {
  await addSkill({ name: name.value, level: level.value })
  name.value = ''
  level.value = ''
  emit('skill-added')
}
</script>
