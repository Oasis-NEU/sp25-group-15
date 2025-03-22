# import amazon api key(dont have key yet associates loading 1-2 day wait)
# import flask(python library)

# Fetch from React get the information whether it be chocolate protien powder, creatine or whatever it is

# Send data to amazon api and get back the returning giga string 

# Parse the data, could use openai for this.

# Send info to frontend
# price per serving, links, images, reviews ouit of 5 or anything else  


import json
import os
from dotenv import load_dotenv
from supabase import create_client

load_dotenv()

# Initialize Supabase client
url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")
supabase = create_client(url, key)

# Get data from the table
response = supabase.table("Protein-Powder-Info").select("*").execute()

#print(response)

data = response.data
protein_per_serving = {}

for row in data:
    protein_per_serving[row["name"]] = row["properserv"]  # Use the actual column name

# Sort by highest protein per serving
sorted_protein = sorted(protein_per_serving.items(), key=lambda item: item[1], reverse=True)
# Print results

for name, protein in sorted_protein:
    print(f"{name}: {protein:.2f}g per serving")
