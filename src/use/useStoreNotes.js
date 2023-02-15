import { ref } from "vue";

const notes = ref([
  {
    id: "id1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptates perferendis iusto deserunt",
  },
  {
    id: "id2",
    content: "This is a shorter note!!",
  },
]);

export function useStoreNotes() {
  const deleteNote = (id) => {
    notes.value = notes.value.filter((note) => note.id !== id);
  };

  const addNote = (content) => {
    notes.value.unshift({
      id: `id${notes.value.length + 1}`,
      content: content,
    });
  };

  const editNote = (id, content) => {
    const index = notes.value.findIndex((note) => note.id === id);
    notes.value[index].content = content;
  };

  return { notes, deleteNote, addNote, editNote };
}
