"use client";

import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import { NoteData } from "./types/Note";
import NoteList from "./components/note-list/NoteList";
import Sidebar from "./components/sidebar/Sidebar";

const categories = [
  { id: 0, label: "Mostrar todo", color: "bg-gray-400" },
  { id: 1, label: "Ideas", color: "bg-green_category" },
  { id: 2, label: "Por hacer", color: "bg-orange_category" },
  { id: 3, label: "Terminado", color: "bg-blue_category" },
];

export default function Home() {
  const [notes, setNotes] = useState<NoteData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterId, setFilterId] = useState<number>(0);

  useEffect(() => {
    const fetchNotes = async () => {
      setIsLoading(true);
      const { data } = await supabase
        .from("notes")
        .select("*")

        .order("created_at", { ascending: false });
      setNotes(data || []);
      setIsLoading(false);
    };
    fetchNotes();
  }, [filterId]);

  const handleDoubleClick = () => {
    const newNote: NoteData = {
      id: Math.random(),
      title: "",
      content: "",
      category: 1,
      created_at: new Date(),
      status: 0,
      isCreating: true,
    };

    setNotes([newNote, ...notes]);
  };

  const updateNote = async (updatedNote: NoteData) => {
    // Actualización de notas
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    if (updatedNote.id.toString().includes(".")) {
      const { data, error } = await supabase
        .from("notes")
        .insert({
          title: updatedNote.title,
          content: updatedNote.content,
          category: updatedNote.category,
        })
        .select()
        .single();
      if (!error && data) {
        setNotes(
          notes.map((note) =>
            note.id === updatedNote.id ? data : note
          )
        );
      }
    } else {
      await supabase
        .from("notes")
        .update({
          title: updatedNote.title,
          content: updatedNote.content,
          category: updatedNote.category,
        })
        .eq("id", updatedNote.id);
    }
  };

  const deleteNote = async (noteId: number) => {
    setNotes(notes.filter((note) => note.id !== noteId));
    await supabase.from("notes").delete().eq("id", noteId);
  };

  return (
    <div className="flex space-x-4">
      <Sidebar onFilterChange={setFilterId} categories={categories} />
      <div className="flex-1" onDoubleClick={handleDoubleClick}>
        <NoteList
          notes={notes}
          
          onUpdateNote={updateNote}
          onDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}
