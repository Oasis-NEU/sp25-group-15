# import amazon api key(dont have key yet associates loading 1-2 day wait)
# import flask(python library)

# Fetch from React get the information whether it be chocolate protien powder, creatine or whatever it is

# Send data to amazon api and get back the returning giga string 

# Parse the data, could use openai for this.

# Send info to frontend
# price per serving, links, images, reviews ouit of 5 or anything else  

import json
from supabase import create_client, Client

# Initialize Supabase client
SUPABASE_URL = "https://qgkfzcaeddoemhkpobrc.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFna2Z6Y2FlZGRvZW1oa3BvYnJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxMjU0MTksImV4cCI6MjA1NDcwMTQxOX0._vHfuYGlIgn6KEvH8raSqENJ8MyL8Qf_5TD60PAOW9Y"

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# Example: Fetch all rows from a table named 'users'
response = supabase.table("Protein Powder").select("*").execute()
data = response.data
protein_per_calorie = {}
for row in data:
    protein_per_calorie[row["Flavor"]] = row["Calories"] / row["Protein"]
sorted_protein = sorted(protein_per_calorie.items(), key=lambda item: item[1], reverse=True)
for flavor, ratio in sorted_protein:
    print(f"{flavor}: {ratio}")