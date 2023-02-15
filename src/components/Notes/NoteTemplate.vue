<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ calcCharNum() }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/editNote/${note.id}`" href="#" class="card-footer-item"
        >Edit</RouterLink
      >
      <a href="#" class="card-footer-item" @click="deleteNote(note.id)"
        >Delete</a
      >
    </footer>
    <ModalDeleteNote />
  </div>
</template>

<script setup>
import { useStoreNotes } from "@/use/useStoreNotes";

const props = defineProps({
  note: {
    type: Object,
  },
});

const calcCharNum = () => {
  const charNum = props.note.content.length;
  if (charNum === 1) {
    return charNum + " Character";
  } else {
    return charNum + " Characters";
  }
};

const { deleteNote } = useStoreNotes();
</script>
