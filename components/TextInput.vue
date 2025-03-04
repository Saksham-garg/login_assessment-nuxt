<script setup lang="ts">
interface Props {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  modelValue: string | number;
}

defineProps<Props>();

defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();
</script>

<template>
  <div class="flex flex-col">
    <label :for="id" class="text-sm font-medium text-gray-700">{{
      label
    }}</label>
    <input
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
    />
  </div>
</template>
