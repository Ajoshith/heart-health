import getpass
import os
if "GOOGLE_API_KEY" not in os.environ:
    os.environ["GOOGLE_API_KEY"] = "AIzaSyBt3ibPpnmRHdr3cc6VFP5hWd-3dprAqBQ"
from langchain_community.document_loaders import TextLoader
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.document_loaders import TextLoader
import faiss
from langchain.chains import create_retrieval_chain
from langchain_core.runnables import RunnablePassthrough
import pickle
embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
loader = TextLoader("server.js/data.txt")
documents = loader.load()
text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
docs = text_splitter.split_documents(documents)
db = FAISS.from_documents(docs, embeddings)
with open("my_faiss_index.pkl", "wb") as f:
    pickle.dump(db, f)