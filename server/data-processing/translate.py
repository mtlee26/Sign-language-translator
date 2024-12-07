from googletrans import LANGUAGES, Translator
translator = Translator()
text="가수"
translations = translator.translate(text=text, src='auto', dest='en').text
print(translations)