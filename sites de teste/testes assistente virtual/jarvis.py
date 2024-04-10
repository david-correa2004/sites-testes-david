import speech_recognition as sr
import pyttsx3
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

# Configuração do assistente virtual
bot = ChatBot('MeuAssistente')
trainer = ChatterBotCorpusTrainer(bot)
trainer.train('chatterbot.corpus.portuguese')  # Treinamento em português

# Configuração da síntese de voz
engine = pyttsx3.init()

# Função para ouvir o usuário
def ouvir_microfone():
    reconhecedor = sr.Recognizer()
    with sr.Microphone() as source:
        print("Diga algo...")
        reconhecedor.adjust_for_ambient_noise(source)
        audio = reconhecedor.listen(source)

    try:
        texto = reconhecedor.recognize_google(audio, language='pt-BR')
        print("Você: " + texto)
        return texto
    except sr.UnknownValueError:
        return "Não entendi o que você disse."
    except sr.RequestError:
        return "Desculpe, ocorreu um erro na conexão com o serviço de reconhecimento de voz."

# Função para falar a resposta
def falar_resposta(resposta):
    engine.say(resposta)
    engine.runAndWait()

# Função principal
def conversar():
    print("Olá! Eu sou seu assistente virtual. Fale comigo. Diga 'sair' para encerrar.")
    while True:
        entrada = ouvir_microfone().lower()
        if entrada == 'sair':
            print("Até logo!")
            break
        resposta = bot.get_response(entrada)
        print("Assistente: " + str(resposta))
        falar_resposta(str(resposta))

# Iniciar a conversa por voz
conversar()
