<template>
    <select name="category" class="form-select" :id="id"
    @input="$emit('update:modelValue', $event.target.value)">
    <option selected disabled>-- Select Category -- </option>
    <option v-for="(item, index) in data" :key="index" :value="item">
        {{ item }}
    </option>
    </select>
</template>

<script setup>
    defineProps({
        data: {type: Array, required: true},
        id: {type: String, required: true},
        modelValue: {type: [String, Number]}
    });
</script>