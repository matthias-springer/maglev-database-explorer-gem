#require "maglev_record"

class Book
  include MaglevRecord::RootedBase

  def custom_database_tabs
     tabs = []

     html_generator = <<-GENERATOR_STRING
        |outerHtml|
        outerHtml := html div.
    outerHtml with: [html img
              style: 'height: 223px; margin-right: 10px; display: inline-block;';
src: 'images/dreizehn.jpg'.

outerHtml with: [html span style: 'float:right'; with: [html table style: 'margin-bottom: 0px'; class: 'table table-bordered'; 
with: [html tbody with: [
html tr with: [html td with: [html b with: 'Titel']. html td with: 'Dreizehn bei Tisch'].
html tr with: [html td with: [html b with: 'Autor']. html td with: 'Agatha Christie'].
html tr with: [html td with: [html b with: 'Erscheinungsdatum']. html td with: 'September 1933'].
html tr with: [html td with: [html b with: 'Preis']. html td with: '9,95 €'].
html tr with: [html td with: [html b with: 'ISBN-13']. html td with: '978-3596170715'].
html tr with: [html td with: [html b with: 'Verfügbarkeit']. html td with: '13 Exemplare'].
]]]].
]
      GENERATOR_STRING

      tabs.push(["Buchdaten", "bookData", html_generator])
      tabs

  end


end

Book.maglev_record_persistable
Book.redo_include_and_extend

Maglev::PERSISTENT_ROOT[:b] = Book.new

