<template>
  <div class="card p-4 mb-5 has-background-success-dark">
    <label v-if="label" class="label has-text-white"></label>
    <div class="field">
      <div class="control">
        <textarea
          class="textarea"
          :placeholder="placeholder"
          maxlength="100"
          :value="modelValue"
          @input="updateNewNote"
          v-autofocus
        />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  label: {
    type: String,
  },
  placeholder: {
    type: String,
    default: "Try Somthing ...",
  },
  modelValue: {
    type: String,
  },
});

const updateNewNote = (event) => {
  emit("update:modelValue", event.target.value);
};

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue.length === 100) {
      alert("Only 100 Character allowed!!");
    }
  }
);
</script>
