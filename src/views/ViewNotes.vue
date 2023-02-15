<template>
  <div class="notes">
    <AddEditNote placeholder="Add New Note" v-model="newNote">
      <template #buttons>
        <button
          class="button is-link has-background-success"
          :disabled="!newNote"
          @click="addNoteHandler"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <NoteTemplate v-for="note in notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import NoteTemplate from "@/components/Notes/NoteTemplate.vue";
import { ref } from "vue";
import { useStoreNotes } from "@/use/useStoreNotes";

const newNote = ref("");

const { notes, addNote } = useStoreNotes();

const addNoteHandler = () => {
  addNote(newNote.value);
  newNote.value = "";
};
</script>
