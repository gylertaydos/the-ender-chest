import spacy
# nlp = spacy.cli.download("en_core_web_sm")
nlp = spacy.load('en_core_web_sm')

avatarSpeeches = open('avatarSpeeches.txt', 'r', encoding='utf8')
words = avatarSpeeches.read()
wordstrings = str(words)
print(wordstrings)

# dracula = open('grimm.txt', 'r', encoding='utf8')
# avatarSpeeches= nlp
# dracula= nlp
# print(avatarSpeeches, '<->', dracula, avatarSpeeches.similarity(dracula))
# tried to get it to compare the two documents like on the web guide but it couldn't

avatarWords = nlp(wordstrings)
for token in avatarWords:
    # if token.pos_ == "VERB":
    print(token.text, "---->", token.pos_, ":::::", token.lemma_, token.dep_, token.is_stop)