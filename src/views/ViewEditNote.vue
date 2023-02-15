<template>
  <div class="edit-note">
    <AddEditNote v-model="noteContent">
      <template #buttons>
        <button class="button is-link is-light" @click="$router.back('/')">
          Cancel
        </button>
        <button
          class="button is-link has-background-link"
          @click="editNoteHandler"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/use/useStoreNotes";
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const { notes, editNote } = useStoreNotes();

const route = useRoute();
const router = useRouter();

const noteContent = ref("");

onMounted(() => {
  noteContent.value = notes.value.filter(
    (note) => note.id === route.params.id
  )[0].content;
});

const editNoteHandler = () => {
  editNote(route.params.id, noteContent);
  router.push("/");
};
</script>
