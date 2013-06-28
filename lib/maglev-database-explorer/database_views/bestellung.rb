#require "maglev_record"

class Bestellung
  include MaglevRecord::RootedBase

  attr_accessor :buch

  def initialize
    @buch = self.buch = Book.new
  end

  def init_buch
    @buch = self.buch = Book.new
  end

  def custom_database_tabs
     tabs = []

     html_generator = <<-GENERATOR_STRING
        |outerHtml|
        outerHtml := html div.
 object ensureIsLoaded: 'attributes' from: 1 to: 0 withCallback: [ |innerHtml|
  innerHtml := HTMLCanvas onJQuery: outerHtml asJQuery. 
    innerHtml with: [innerHtml img
              style: 'height: 223px; margin-right: 10px; display: inline-block; margin-top:10px;';
src: 'images/einkaufswagen.jpg'.

innerHtml with: [innerHtml span style: 'float:right'; with: [innerHtml table style: 'margin-bottom: 0px'; class: 'table table-bordered'; 
with: [innerHtml tbody with: [
innerHtml tr with: [innerHtml td with: [innerHtml b with: 'Käufer']. innerHtml td with: 'Erika Mustermann'].
innerHtml tr with: [innerHtml td with: [innerHtml b with: 'Gekaufte Produkte']. innerHtml td with: ((object instVarAt: '@maglev_attributes') atKeyString: 'buch') inlineViewComponent].
innerHtml tr with: [innerHtml td with: [innerHtml b with: 'Gesamtpreis']. innerHtml td with: '29,90 €'].
innerHtml tr with: [innerHtml td with: [innerHtml b with: 'Bestelldatum']. innerHtml td with: '5. Juli 2013'].
innerHtml tr with: [innerHtml td with: [innerHtml b with: 'Versanddatum']. innerHtml td with: '(noch nicht versandt)'].
innerHtml tr with: [innerHtml td with: [innerHtml b with: 'Anzahl der Raten']. innerHtml td with: '0'].

]]]].
]].
      GENERATOR_STRING

      tabs.push(["Bestellung", "bestellungData", html_generator])
      tabs

  end


end

Book.maglev_record_persistable
Book.redo_include_and_extend

Maglev::PERSISTENT_ROOT[:b] = Book.new


Maglev::PERSISTENT_ROOT[:best] = Bestellung.new
Maglev::PERSISTENT_ROOT[:best].init_buch
