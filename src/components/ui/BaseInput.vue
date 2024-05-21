
<template>
    <div :class="{'input-wrapper': type == 'file'}">
        <label :for="id" class="fw-semibold">
            {{ label }} <span style="color:#cb3a31">*</span>
            <slot></slot>
        </label>
        <input :type="type" :id="id" :placeholder="placeholder" :readonly="readonly === '1'" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" @keyup="$emit('keyInput', $event.target.value)" 
        @focus="$emit('totalTimeFocus', $event.target.value)"
        :class="[{'d-none': isImage}, 'form-control', {'file-input': type == file}]" 
        />
    </div>
</template>

<style>
    .input-wrapper {
        padding: 0.375rem 0.75rem;
        width: 200px;
        text-align: center;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        border: 1px solid #ced4da;
        background-color: #ced4da;
        border-radius: 10px;
        transition: all 1s ease;
    }
    .input-wrapper:hover {
        background-color: #b9bec3;
    }

    .file-input {
        cursor: pointer;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 50;
        font-size: 50px;
        opacity: 0;
    }
</style>
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