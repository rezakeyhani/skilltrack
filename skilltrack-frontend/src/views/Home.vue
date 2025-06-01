<template>
  <div class="max-w-xl mx-auto mt-10">
    <AddSkillForm @skillAdded="refreshSkills" />
    <SkillList ref="listRef" />
  </div>
</template>

<script setup>
import AddSkillForm from '../components/AddSkillForm.vue'
import SkillList from '../components/SkillList.vue'
import { ref } from 'vue'

const listRef = ref(null)
const refreshSkills = () => {
  listRef.value?.fetchSkills()
}
</script>