
import { readonly } from 'vue';
<template>
    <div>
        <label :for="id" class="fw-semibold">
            Firstname <span style="color:#cb3a31">*</span>
        </label>
        <input class="form-control" :type="type" :id="id" :placeholder="placeholder" :value="modelValue" :readonly="readonly === '1'">
    </div>
</template>

<script setup>
    defineProps({
        type: {type: String, required: true},
        label: {type: String, required: true},
        id: {type: String, required: true},
        placeholder: {type: String, required: false},
        modelValue: {type: String, required: false},
        readonly: {type: String, required: true, default: '0'}
    })
</script>