# Bojack Horseman Collection Regex

1. ```for f in *.html; do mv $f `basename $f .html`.xml; done;``` in the git bash
1. ```(<!doctype html>\n*)?(</?)ht(ml>)``` replaced by ```\2x\3```
1. ```&``` replaced by ```&amp;```
I didn't replace any angle brackets as the ones I saw present were all element tags
4. ```<h4>.*</h4>``` was removed
4. ```<h1>.*</h1>``` was removed
4. ```<a href=.*>(.*)</a>``` was replaced with ```<timestamp>\1</timestamp>```
4. ```\[(.*)\]``` became ```<subtitle>\1</subtitle>```
4. ```<!doctype html>``` is removed
4. ```<head>.+?(<title>.*</title>).+?</head>``` becomes ```\1```
4. ```<i>♪ ♪</i>``` replaced with ```<music/>```
4. ```(\R)(\R)``` replaced with ```\1```
4. ```<article>(.+?)</article>``` replaced with ```\1```
4. ```<i>♪(.*) ♪</i>``` becomes ```<music>\1</music>```
4. ```(</music>\R)(\R</body>)``` became ```\1</p>\2``` to fix an unclosed ```</p>``` that was at the end of all my documents
4. 