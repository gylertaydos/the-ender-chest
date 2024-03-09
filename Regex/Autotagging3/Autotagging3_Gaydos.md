# Autotagging Exercise 3: Dracula
1. ```&``` replace with ```&amp;```
1. ```<``` replaced with ```&lt;```
1. ```>``` replaced with ```&gt;```
1. ```\n{3,}``` replaced with ```\n\n```
1. ```^(.+)$``` replaced with ```<p>\1</p>```
1. ```<p>CHAPTER ([IVXLC]+)</p>``` replaced with ```<heading>\1</heading>```
1. ```(<heading>)``` replaced with ```</chapter><chapter>\1```
1. ```"(.+?)"``` replaced with ```<quote>\1</quote>```
1. Saved as an XML file and added a root element, as well as fixing the ```<chapter>``` tags
