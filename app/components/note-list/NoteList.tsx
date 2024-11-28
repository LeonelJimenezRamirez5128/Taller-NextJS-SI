import { NoteData } from "../../types/Note";
import NoteCard from "../note-card/NoteCard";

interface NoteListProps {
  notes: NoteData[];
  onUpdateNote: (updatedNote: NoteData) => Promise<void>;
  onDeleteNote: (noteId: number) => void;
  isEditable?: boolean; // Propiedad opcional para habilitar o deshabilitar la edición
}

const NoteList = ({ notes, onUpdateNote, onDeleteNote, isEditable = true }: NoteListProps) => {
  return (
    <div className="flex flex-wrap p-4 gap-4 overflow-auto max-h-screen">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onUpdateNote={onUpdateNote}
          onDeleteNote={onDeleteNote}
          isEditable={isEditable} // Pasamos la propiedad isEditable a cada NoteCard
        />
      ))}
    </div>
  );
};

export default NoteList;
