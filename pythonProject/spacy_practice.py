import spacy
# nlp = spacy.cli.download("en_core_web_sm")
nlp = spacy.load('en_core_web_sm')

avatarSpeeches = open('avatarSpeeches.txt', 'r', encoding='utf8')
words = avatarSpeeches.read()
wordstrings = str(words)
# print(wordstrings)

avatarWords = nlp(wordstrings)
for token in avatarWords:
    # if token.pos_ == "VERB":
    print(token.text, "---->", token.pos_, ":::::", token.lemma_)