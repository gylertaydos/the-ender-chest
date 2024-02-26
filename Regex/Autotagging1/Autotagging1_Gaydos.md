# Title

1. ```.+``` is replaced by ```<movie> \0 </movie>```
1. ```(<movie>)(.+?)\t``` is replaced by ```\1<title>\2</title>```
1. ```&``` is replaced by ```&amp;```
1. ```\d[0-9]+\t``` is replaced by ```<year> \0</year>```
1. ```(</year>)(.+)\t``` is replaced by ```\1<country> \2</country>```
1. ```(</country>)(\w*\W*)(\w*)``` is replaced by ```\1 <runTime unit="\3"> \2</runTime>```
It should be noted that for the final transformation, line 25,093's entry has a "N/A" entered for the runtime. I've tried a few things, but I'm not sure how to handle this.
