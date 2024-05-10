
<template>
    <div>
        <label :for="id" class="fw-semibold">
            {{ label }} <span style="color:#cb3a31">*</span>
            <slot></slot>
        </label>
        <input :class="[{'d-none': isImage}, 'form-control']" :type="type" :id="id" :placeholder="placeholder" :readonly="readonly === '1'" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" @keyup="$emit('keyInput', $event.target.value)" />
    </div>
</template>

<script setup>
import { readonly } from 'vue';

    defineProps({
        type: {type: String, required: true},
        label: {type: String, required: true},
        id: {type: String, required: true},
        placeholder: {type: String, required: false},
        modelValue: {type: [String, Number], required: false},
        readonly: {type: String, required: false, default: '0'},
        isImage: {type: Boolean, required: false}
    })
</script>