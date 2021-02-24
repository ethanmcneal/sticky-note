class NotesController < ApplicationController
  
  #// TODO main page: shows all notes
  def index
    @notes = Note.all
    render component: "Notes", props: {notes: @notes}
  end
  # // TODO shows the info for a single note
  def show
    @note = Note.find(params[:id])

    render component: "Note", props: {note: @note}
  end
  #TODO page for input fields to create a new note
  def new
    @note = Note.new(note_params)
    if @note.save
      redirect_to notes_path
    else


    render component: "NewNote", props: {note: @note}
  end
end

private

def note_params
  params.require(:note).permit(:title, :body)
end

end

