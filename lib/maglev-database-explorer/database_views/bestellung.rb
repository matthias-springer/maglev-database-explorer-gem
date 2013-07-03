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
style: 'height: 150px; margin-right: 15px; display: inline-block; margin-top:50px;margin-left: 7px;';
src: 'images/laptop.png'.

innerHtml with: [innerHtml span style: 'float:right'; with: [innerHtml table style: 'margin-bottom: 0px'; class: 'table table-bordered'; 
with: [innerHtml tbody with: [
innerHtml tr with: [innerHtml td with: [innerHtml b with: 'Käufer']. innerHtml td with: 'Klaus Müller'].
innerHtml tr with: [innerHtml td with: [innerHtml b with: 'Produkt']. innerHtml td with: 'Notebook Modell 42'].
innerHtml tr with: [innerHtml td with: [innerHtml b with: 'Kategorie']. innerHtml td with: ((object instVarAt: '@maglev_attributes') atKeyString: 'buch') inlineViewComponent].

innerHtml tr with: [innerHtml td with: [innerHtml b with: 'Bestelldatum']. innerHtml td with: '5. Juli 2013'].
innerHtml tr with: [innerHtml td with: [innerHtml b with: 'Gesamtpreis']. innerHtml td with: '599,99 €'].
innerHtml tr with: [innerHtml td with: [innerHtml b with: 'Ratenzahlung']. innerHtml td with: [innerHtml img src: 'images/kreuz-rot.png'; style: 'width:18px; margin-right:5px'. innerHtml with: 'nein']].
innerHtml tr with: [innerHtml td with: [innerHtml b with: 'Anzahl der Raten']. innerHtml td with: '0'].

]]]].
]].
      GENERATOR_STRING

      tabs.push(["Bestellung", "bestellungData", html_generator])
      tabs

  end

  def kauf_bestaetigen
    gesamtpreis_berechnen
  end

  def gesamtpreis_berechnen
    versandkosten_addieren
  end

  def versandkosten_addieren
    erste_rate_berechnen(2.5, 9.95, 0)
  end

  def erste_rate_berechnen(zinssatz, preis, anzahl_der_raten)
    
    betrag_rate = zinssatz * preis / anzahl_der_raten

    rechnung_stellen(betrag_rate)

  end

  def rechnung_stellen(betrag)
    MaglevDatabaseExplorer.halt
  end
end

Book.maglev_record_persistable
Book.redo_include_and_extend

Maglev::PERSISTENT_ROOT[:b] = Book.new


Maglev::PERSISTENT_ROOT[:best] = Bestellung.new
Maglev::PERSISTENT_ROOT[:best].init_buch
