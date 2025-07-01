from langchain.vectorstores import FAISS
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter
import pickle

# 1. Load your context files (could be .txt, PDF, CSV, etc.)
loader = TextLoader("medical_context.txt")
docs = loader.load()

# 2. Split text into chunks
splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
chunks = splitter.split_documents(docs)

# 3. Convert chunks to embeddings
embedding_model = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

# 4. Create FAISS index
faiss_index = FAISS.from_documents(chunks, embedding_model)

# 5. Save it as a .pkl (your code expects this)
with open("my_faiss_index.pkl", "wb") as f:
    pickle.dump(faiss_index, f)
