<template>
  <div class="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded">
    <h1 class="text-2xl font-bold mb-4">SkillTrack</h1>
    <SkillForm @skill-added="loadSkills" />
    <SkillList :skills="skills" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SkillForm from './components/SkillForm.vue'
import SkillList from './components/SkillList.vue'
import { fetchSkills } from './api.js'

const skills = ref([])

const loadSkills = async () => {
  skills.value = await fetchSkills()
}

onMounted(() => {
  loadSkills()
})
</script>

