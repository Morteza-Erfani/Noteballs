<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ notes.length }}</td>
        </tr>
        <tr>
          <td>Number of Character (of all notes)</td>
          <td>{{ calcCharSum() }}</td>
        </tr>
      </tbody>
    </table>
    <input type="text" placeholder="Do you love noteballs?" class="input" />
  </div>
</template>

<script setup>
import { useStoreNotes } from "@/use/useStoreNotes";

const { notes } = useStoreNotes();

const calcCharSum = () => {
  return notes.value.reduce((total, value) => total + value.content.length, 0);
};
</script>
