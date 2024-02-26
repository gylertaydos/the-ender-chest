# Autotagging 2

1. First I deleted the extra fluff at the beginning and end of the document leaving only the sonnets
1. I checked for ampersands and angle brackets, but none were found
1. I replaced ```^ {2}``` with nothing, eliminating the first two spaces on each line
1. ```<line>([IVXLC]+)</line>``` found the Roman Numerals, which I replaced with ```</sonnet><sonnet n="\1">```
1. Afterwards, I saved it as an xml document, removed the extra ```</sonnet>``` tag from the beginning of the document and added it at the end, gave it a root element, and pretty printed it.
